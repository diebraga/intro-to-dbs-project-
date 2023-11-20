import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAll } from "@/utils/getAll";
import Head from "next/head";

export default async function Customers() {
  // await deleteAllUsers()
//   await createUserForEachRole()
const data = await getAll("customers");


return <pre className="text-xs">{JSON.stringify(data, null, 2)}
<div className="text-xl text-blue-500">
SELECT * FROM customers
</div>

</pre>;}
