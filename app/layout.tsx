import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Water Quality Index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignInUrl={"/app"}
      afterSignUpUrl={"/app"}
      afterSignOutUrl={"/"}
    >
      <html lang="en">
        <body
          className={
            "min-h-screen h-full w-full bg-gradient-to-br from-teal-600 to-emerald-700 text-white"
          }
          style={poppins.style}
        >
          <div className="absolute -z-10 min-h-screen h-full w-full backdrop-blur-md bg-white/40" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
