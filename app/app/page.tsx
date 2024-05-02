import { app, database } from "@/app/firebase-config";
import { get, ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { Chart } from "./chart";

export default async function AppPage() {
  const dataRef = ref(database, "data");
  const dataSnapshot = await get(dataRef);
  let data = new Array<number>();

  if (dataSnapshot.exists()) {
    data = dataSnapshot.val();
  }

  console.log(data.reduce((total, num) => total + num, 0) / data.length);

  return (
    <>
      <p className="text-2xl font-bold">Welcome to the Portal!</p>

      <section className="h-80 w-full">
        <Chart data={data} />
      </section>
    </>
  );
}
