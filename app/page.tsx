import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center select-none">
      <div className="text-center z-20">
        <h1 className="text-4xl font-bold mb-4">WATER QUALITY INDEX</h1>
        <Link href={"/app"}>
          <button className="border-2 px-2 py-1 rounded-lg">Get Started</button>
        </Link>
      </div>
    </main>
  );
}
