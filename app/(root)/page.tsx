import Image from "next/image";
import Link from "next/link";
import React from "react";
import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewByUserId,
  getLatestInterview,
} from "@/lib/actions/general.action";

const HomePage = async () => {
  const user = await getCurrentUser();

  const [userInterview, latestInterview] = await Promise.all([
    await getInterviewByUserId(user?.id),
    await getLatestInterview({ userId: user?.id }),
  ]);

  const hasUpcomingInterview = latestInterview?.length > 0;
  const hasPastInterview = userInterview?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview ready with AI-Powered Practice & feedback.</h2>
          <p className="text-lg">
            Practice on real interview question & get instant feedback
          </p>
          {/* will take all the property as a child */}
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/interview"}>Start an Interview</Link>
          </Button>
        </div>
        <Image
          src={"/robot.png"}
          alt="robo-dude"
          width={408}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>
        <div className="interviews-section">
          {hasPastInterview ? (
            userInterview?.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>You haven&apos;t taken any interview yet</p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterview ? (
            latestInterview?.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>There are no new interview available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
