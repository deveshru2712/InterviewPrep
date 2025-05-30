# InterviewPrep

An AI-powered interview preparation platform that provides realistic practice interviews and instant feedback to help you ace your next job interview.

## Features and Functionality

*   **AI-Powered Interviews:** Practice interviews with an AI interviewer that asks relevant questions based on your chosen role, experience level, and tech stack.
*   **Customizable Interviews:** Generate interview questions tailored to specific job roles, experience levels (Junior, Senior), preferred question types (Technical, Behavioral, Mixed), and tech stacks.
*   **Real-time Feedback:** Receive instant feedback on your interview performance, including overall impression scores, category-specific scores (Communication Skills, Technical Knowledge, Problem Solving, Cultural Fit, Confidence and Clarity), strengths, and areas for improvement.
*   **Transcript Analysis:**  The AI analyzes the interview transcript to provide detailed and relevant feedback.
*   **Authentication:** Secure user authentication using Firebase.
*   **Personalized Dashboard:** View your past interviews and track your progress on the home page (`app/page.tsx`).
*   **Tech Stack Display:**  Interview cards and interview pages display relevant technology icons (e.g., React, Node.js).
*   **Session Management:** Uses session cookies for authentication, stored securely with `httpOnly` and `secure` flags (`lib/actions/auth.action.ts`).
*  **Voice integration**: Uses Vapi.ai to simulate a realistic phone interview.

## Technology Stack

*   **Next.js:** React framework for building the user interface and handling routing.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **Tailwind CSS:** CSS framework for styling the user interface.
*   **Firebase:** Backend-as-a-service (BaaS) for authentication, data storage (Firestore), and serverless functions.
*   **Vapi.ai:** Voice API platform for simulating phone interviews.
*   **@ai-sdk/google:** Provides integration with Google's AI models (Gemini) for generating interview questions and feedback.
*   **Zod:** TypeScript-first schema declaration with static type inference.
*   **React Hook Form:** Library for building forms in React.
*   **Sonner:**  Library for displaying toast notifications.
*   **Dayjs:** Library for date and time formatting.
*   **clsx & tailwind-merge:** Utility functions for conditionally applying class names.

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   **Node.js:**  Version 18 or higher is recommended.
*   **npm or Yarn:**  Package manager for installing dependencies.
*   **Firebase Project:**  A Firebase project with Firestore enabled.
*   **Vapi.ai Account:**  A Vapi.ai account and API key.
*   **Google AI API Key:** A Google Generative AI API key.

## Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```
FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
FIREBASE_PRIVATE_KEY=<YOUR_FIREBASE_PRIVATE_KEY>
FIREBASE_CLIENT_EMAIL=<YOUR_FIREBASE_CLIENT_EMAIL>
GOOGLE_GENERATIVE_AI_API_KEY=<YOUR_GOOGLE_GENERATIVE_AI_API_KEY>
NEXT_PUBLIC_VAPI_WEB_TOKEN=<YOUR_VAPI_WEB_TOKEN>
NEXT_PUBLIC_VAPI_WORKFLOW_ID=<YOUR_VAPI_WORKFLOW_ID>
```

*   Replace `<YOUR_FIREBASE_PROJECT_ID>`, `<YOUR_FIREBASE_PRIVATE_KEY>`, and `<YOUR_FIREBASE_CLIENT_EMAIL>` with your Firebase project credentials.  Ensure that the `FIREBASE_PRIVATE_KEY` is correctly formatted with newline characters.  It might be necessary to replace `\n` with actual newline characters.
*   Replace `<YOUR_GOOGLE_GENERATIVE_AI_API_KEY>` with your Google AI API key.
*   Replace `<YOUR_VAPI_WEB_TOKEN>` and `<YOUR_VAPI_WORKFLOW_ID>` with your Vapi.ai credentials.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/deveshru2712/InterviewPrep.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd InterviewPrep
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

## Firebase Setup

1. **Firebase Admin SDK Setup:**
   The application uses the Firebase Admin SDK for server-side operations such as authentication and data management. The initialization is located at `firebase/admin.ts`.  Ensure the environment variables related to Firebase are set up correctly as mentioned in the Environment Variables section.

2. **Firebase Client SDK Setup:**
   The client-side Firebase SDK initialization is in `firebase/client.ts`.  The `firebaseConfig` object contains the necessary information for the client to connect to your Firebase project.  While the current configuration includes placeholder API keys and project IDs, these **MUST** be replaced with your actual Firebase project credentials.  Client-side API keys can be found in your Firebase project settings.

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev
    ```

2.  **Open your browser and navigate to `http://localhost:3000`.**

3.  **Sign up or sign in to your account.**

4.  **Generate an interview:**
    *   Navigate to the `/interview` route.
    *   Select the desired role, experience level, question type, and tech stack.
    *   Click the "Call" button to start the AI-powered interview.

5.  **Take an interview:**
    *   From the dashboard (`/`), you can view your past interviews or upcoming interviews.
    *   Click the "View interview" button to start an interview.
    *   After completing the interview, you will be redirected to the feedback page.

6.  **View Feedback:**
    *   After the interview, you will be automatically redirected to the feedback page (`/interview/[id]/feedback`).
    *   You can also access feedback from the dashboard by clicking "Check Feedback" on a completed interview card.

### Authentication Flow

*   **Sign-up:** Located at `/sign-up`, uses `components/AuthForm.tsx` and the `signUp` action in `lib/actions/auth.action.ts`. The `createUserWithEmailAndPassword` function from `firebase/auth` is used to create the user in Firebase Authentication. User data is then stored in Firestore.
*   **Sign-in:** Located at `/sign-in`, uses `components/AuthForm.tsx` and the `signIn` action in `lib/actions/auth.action.ts`.  The `signInWithEmailAndPassword` function from `firebase/auth` is used to authenticate the user.  A session cookie is then set using `setSessionCookie`.
*   **Authentication Check:**  The `isAuthenticated` function in `lib/actions/auth.action.ts` checks for the presence of a session cookie to determine if a user is authenticated. This is used in the `app/(auth)/layout.tsx` and `app/(root)/layout.tsx` layouts to redirect users appropriately.

## API Documentation

### `app/api/vapi/generate/route.ts`

*   **`POST`**:  Generates interview questions using the Google Gemini model based on the provided request body:

    ```json
    {
        "type": "technical" | "behavioral" | "mix",
        "role": "Frontend Developer",
        "level": "Junior" | "Senior",
        "techstack": "React, TypeScript, Next.js",
        "amount": 10,
        "userid": "<USER_ID>"
    }
    ```

    *   The generated questions and interview metadata are saved to Firestore in the `interviews` collection.

## Contributing Guidelines

Contributions are welcome!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## License Information

This project has no specified license. All rights reserved.

## Contact/Support Information

*   **GitHub Repository:** [https://github.com/deveshru2712/InterviewPrep](https://github.com/deveshru2712/InterviewPrep)