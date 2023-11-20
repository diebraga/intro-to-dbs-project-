import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { changeJobTitle } from "@/utils/changeJobTitle";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAll } from "@/utils/getAll";
import Head from "next/head";

export default async function Adm() {
  // await deleteAllUsers()
  await changeJobTitle("Office Worker", "Administrator");

  const data = await getAll("users");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        {
          'UPDATE users SET role = ? WHERE role = ?", [newTitle, currentTitle]  '
        }
      </div>
    </pre>
  );
}
