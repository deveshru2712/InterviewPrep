declare namespace NodeJS {
  interface ProcessEnv {
    // Firebase config
    FIREBASE_PROJECT_ID: string;
    FIREBASE_PRIVATE_KEY: string;
    FIREBASE_CLIENT_EMAIL: string;

    // Google AI API
    GOOGLE_GENERATIVE_AI_API_KEY: string;

    // Public variables (accessible in browser)
    NEXT_PUBLIC_VAPI_WEB_TOKEN: string;
    NEXT_PUBLIC_VAPI_WORKFLOW_ID: string;
  }
}
