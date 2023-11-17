import { getAll } from "@/utils/getAll";
import React from "react";

export default async function GetAllUsers() {
  const data = await getAll("users");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
