import Link from "next/link";
import React from "react";
import AddClient from "./components/AddClient";
import ClientList from "./components/ClientList";

export default function Home() {
  return (
    <main className="container max-w-sm mx-auto mt-4">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold">Customer Relationship Management</h1>
        <AddClient />
        <ClientList />
      </div>
    </main>
  );
}
