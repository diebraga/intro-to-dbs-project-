import { getAllUsers } from "@/utils/getAllUsers";
import React from "react";

export default async function GetAllUsers() {
  const data = await getAllUsers();

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
