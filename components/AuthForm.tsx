"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully.Please sign in");
        router.push("/sign-in");

        console.log("sign up", values);
      } else {
        toast.success("Sign in successfully.");
        router.push("/");

        console.log("sign in", values);
      }
    } catch (error) {
      toast.error(`There was an error: ${error}`);
      console.log(error);
    }
  }

  const isSign = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src={"/logo.svg"} alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">Prepwise</h2>
        </div>
        <h3 className="text-center">Practice job interview with AI</h3>
        <Form {...form}>
          <form
            className="w-full space-y-6 mt-4 form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {!isSign && (
              <FormField
                control={form.control}
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            )}

            <FormField
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="Your email address"
            />

            <FormField
              control={form.control}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

            <Button type="submit" className="btn">
              {isSign ? "Sign in" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSign ? "No account yet ?" : "Already have an account ?"}
          <Link
            href={!isSign ? "/sign-in" : "sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSign ? "Sign in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
