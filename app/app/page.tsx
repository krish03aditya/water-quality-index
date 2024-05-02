import { app, database } from "@/app/firebase-config";
import { get, ref, onValue } from "firebase/database";
import { useEffect } from "react";

export default async function AppPage() {
  const dataRef = ref(database, "data");
  const dataSnapshot = await get(dataRef);
  let data = [];

  if (dataSnapshot.exists()) {
    data = dataSnapshot.val();
  }

  console.log(data);

  return (
    <>
      <p className="text-2xl font-bold">Welcome to the Portal!</p>

      {/* <p>data: {JSON.stringify(data)}</p> */}
    </>
  );
}
