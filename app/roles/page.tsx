import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAllRoles } from "@/utils/getAllRoles";
import { getAllUsers } from "@/utils/getAllUsers";
import Head from "next/head";

export default async function Home() {
  // await deleteAllUsers()
  // await createUserForEachRole()
  const data = await getAllRoles();

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
