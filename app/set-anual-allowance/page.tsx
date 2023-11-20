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
  await updateAnnualLeaveAllowance(29);
  const data = await getAll("users");

  return <pre className="text-xs">{JSON.stringify(data, null, 2)}
    <div className="text-xl text-blue-500">UPDATE users SET annual_leave_allowance = 29</div>

  </pre>;
}
