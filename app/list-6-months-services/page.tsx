import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { changeJobTitle } from "@/utils/changeJobTitle";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { findLongTermExpensiveServices } from "@/utils/findLongTermExpensiveServices";
import { getAll } from "@/utils/getAll";
import { listUsersOlderThanFourYears } from "@/utils/listUsersOlderThanFourYears";
import Head from "next/head";

export default async function MoreThan4() {
  // await deleteAllUsers()

  const data = await findLongTermExpensiveServices();

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT * FROM services
        <br />
        {"WHERE duration_months > 3 AND monthly_cost >= 20"}
      </div>
    </pre>
  );
}
