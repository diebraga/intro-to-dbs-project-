import { changeJobTitle } from "@/utils/changeJobTitle";
import { getAll } from "@/utils/getAll";

export default async function Adm({ searchParams }: any) {
  // await deleteAllUsers()
  await changeJobTitle("Administrator", "Office Worker");

  const data = await getAll("users");
  const userObject = {
    id: 4,
    username: "sales_rep",
    name: "Alice",
    surname: "Johnson",
    password: "securePass123",
    address: "123 Greenway Blvd",
    annual_leave_allowance: 29,
    role: "Sales Representative",
    salary: 40000,
    created_at: new Date().toISOString(),
  };

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? userObject : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">
        {'UPDATE users SET role = ? WHERE role = ?", [newTitle, currentTitle]'}
      </div>
    </pre>
  );
}
