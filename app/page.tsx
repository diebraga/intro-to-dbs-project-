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
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomeWrapper />
    </div>
  );
}
