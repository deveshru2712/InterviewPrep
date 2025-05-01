"use server";

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params: SignUpParams) {
  const { uid, email, name } = params;
  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in instead",
      };
    }

    await db.collection("users").doc(uid).set({ email, name });

    return {
      success: true,
      message: "Account created successfully.Please sign in.",
    };
  } catch (error: any) {
    console.log(`Error while creating an account`, error);
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already associated with another account ",
      };
    }
    return {
      success: false,
      message: "Failed to create an account",
    };
  }
}

const DAY = 60 * 60 * 27;

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;
  try {
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) {
      return {
        success: false,
        message: "User does not exists. Create an account instead.",
      };
    }

    await setSessionCookie(idToken);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "failed to log into an account",
    };
  }
}

export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: DAY * 1000,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: DAY * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}
