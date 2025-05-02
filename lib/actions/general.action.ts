import { db } from "@/firebase/admin";

export async function getInterviewByUserId(
  userId: string
): Promise<Interview[] | null> {
  try {
    if (!userId) {
      console.log("please provide a userid");
      return [];
    }

    const interviews = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();

    return interviews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Interview[];
  } catch (error) {
    console.error("Error in getInterviewByUserId:", error);
    return [];
  }
}

export async function getLatestInterview(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  try {
    if (!userId) {
      console.log("please provide a userid");
      return [];
    }

    const interviews = await db
      .collection("interviews")
      .where("userId", "!=", userId)
      .where("finalize", "==", true)
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();

    return interviews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Interview[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  try {
    const interview = await db.collection("interviews").doc(id).get();
    return interview.data() as Interview;
  } catch (error) {
    console.log(error);
    return null;
  }
}
