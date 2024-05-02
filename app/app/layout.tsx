import { Header } from "@/app/_components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <Header />
      <section className="px-4 py-2">{children}</section>
    </main>
  );
}
