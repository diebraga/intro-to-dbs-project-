import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { changeJobTitle } from "@/utils/changeJobTitle";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { getAll } from "@/utils/getAll";
import { listUsersOlderThanFourYears } from "@/utils/listUsersOlderThanFourYears";
import Head from "next/head";

export default async function MoreThan4() {
  // await deleteAllUsers()
  
const data = await listUsersOlderThanFourYears();

return <pre className="text-xs">{JSON.stringify(data, null, 2)}
<div className="text-xl text-blue-500">
SELECT * FROM users <br/>
      {'WHERE created_at < ["DATE"]'}
</div>

</pre>;}