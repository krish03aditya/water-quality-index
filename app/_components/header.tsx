import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const Header: React.FC = () => {
  return (
    <header className="h-14 border-b-2 border-white px-4 py-2 flex items-center justify-between">
      <p className="text-xl">Water Quality Index</p>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
