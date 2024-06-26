import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_apiKey: z.string(),
    NEXT_PUBLIC_authDomain: z.string(),
    NEXT_PUBLIC_databaseURL: z.string(),
    NEXT_PUBLIC_projectId: z.string(),
    NEXT_PUBLIC_storageBucket: z.string(),
    NEXT_PUBLIC_messagingSenderId: z.string(),
    NEXT_PUBLIC_appId: z.string(),
    NEXT_PUBLIC_measurementId: z.string(),
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    NEXT_PUBLIC_apiKey: process.env.NEXT_PUBLIC_apiKey,
    NEXT_PUBLIC_authDomain: process.env.NEXT_PUBLIC_authDomain,
    NEXT_PUBLIC_databaseURL: process.env.NEXT_PUBLIC_databaseURL,
    NEXT_PUBLIC_projectId: process.env.NEXT_PUBLIC_projectId,
    NEXT_PUBLIC_storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    NEXT_PUBLIC_messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    NEXT_PUBLIC_appId: process.env.NEXT_PUBLIC_appId,
    NEXT_PUBLIC_measurementId: process.env.NEXT_PUBLIC_measurementId,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
