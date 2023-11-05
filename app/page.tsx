import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAllRoles } from "@/utils/getAllRoles";
import { getAllUsers } from "@/utils/getAllUsers";

export default async function Home() {
  await createUserForEachRole()
  // await deleteAllUsers()
  const users = await getAllUsers()
  const roles = await getAllRoles();
  return (
    <>
      <pre>{JSON.stringify(roles, null, 2)}</pre> 
      <pre>{JSON.stringify(users, null, 2)}</pre> 
    </>
    )
}
