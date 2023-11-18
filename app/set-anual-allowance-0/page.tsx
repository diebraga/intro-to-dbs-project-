import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAll } from "@/utils/getAll";
import { updateAnnualLeaveAllowance } from "@/utils/updateAnnualLeaveAllowance";
import Head from "next/head";

export default async function Home() {
  // await deleteAllUsers()
  // await createUserForEachRole()
  await updateAnnualLeaveAllowance("random");
  const data = await getAll("users");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
