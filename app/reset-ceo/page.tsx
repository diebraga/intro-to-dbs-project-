import { getAll } from "@/utils/getAll";
import { setCEOName } from "@/utils/setCEOName";

export default async function SetSeo({ searchParams }: any) {
  await setCEOName("Diego", "Braga");
  const data = await getAll("users");
  const userObject = {
    id: 4,
    username: "sales_rep",
    name: "Alice",
    surname: "Johnson",
    password: "securePass123",
    address: "123 Greenway Blvd",
    annual_leave_allowance: 25,
    role: "Sales Representative",
    salary: 40000,
    created_at: "2021-01-10",
  };

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? userObject : "";
  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}{" "}
      <div className="text-xl text-blue-500">
        UPDATE users
        <br />
        {"SET name = 'Diego', "}
        <br />
        {"surname = 'Braga',"}
        <br />
        {"WHERE role_id = 'ceo'"}
        <br />
      </div>
    </pre>
  );
}
