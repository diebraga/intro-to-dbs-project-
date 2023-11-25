import { getAll } from "@/utils/getAll";

export default async function UsersBySalary({ searchParams }: any) {
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

  function sortUsersByHighestSalary(users: any[]): any[] {
    return users.sort((a, b) => b.salary - a.salary);
  }

  function renderUsers(users: any[]): any[] {
    return users.map((user) => ({
      name: user.name,
      surname: user.surname,
      position: user.role,
      salary: user.salary,
    }));
  }
  return (
    <pre className="text-xs">
      {JSON.stringify(
        renderUsers(sortUsersByHighestSalary([...data, obj])),
        null,
        2
      )}
      <div className="text-xl text-blue-500">
        SELECT u.name, u.surname, u.role AS position, u.salary
        <br />
        FROM users u
        <br />
        ORDER BY u.salary DESC
      </div>
    </pre>
  );
}
