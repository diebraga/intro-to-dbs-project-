import { LoginForm } from "@/components/LoginForm/LoginForm";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAllRoles } from "@/utils/getAllRoles";
import { getAllUsers } from "@/utils/getAllUsers";
import Head from "next/head";

export default async function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      
     
      <LoginForm />
    </div>
  );
}
