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

export default async function Home({ searchParams }: any) {
  // await deleteAllUsers()
  // await createUserForEachRole()
  await updateAnnualLeaveAllowance("random");
  const data = await getAll("users");
  const userObject = {
    id: 4,
    username: "sales_rep",
    name: "Alice",
    surname: "Johnson",
    password: "securePass123",
    address: "123 Greenway Blvd",
    annual_leave_allowance: 11,
    role: "Sales Representative",
    salary: 40000,
    created_at: "2021-01-10",
  };

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? userObject : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">
        UPDATE users SET annual_leave_allowance = ?, [randomNumbers]
      </div>
    </pre>
  );
}
