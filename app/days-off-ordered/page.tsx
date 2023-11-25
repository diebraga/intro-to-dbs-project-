import { deleteOrder6monthsOld } from "@/utils/deleteOrder6monthsOld";
import { getAll } from "@/utils/getAll";
import { getTotalDaysOffOrdered } from "@/utils/getTotalDaysOffOrdered";

export default async function Users({ searchParams }: any) {
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

  function sortByLeastAnnualLeave(users: any[]): any[] {
    return [...users].sort(
      (a, b) => a.annual_leave_allowance - b.annual_leave_allowance
    );
  }

  function transformUsersForLeave(users: any[]): any[] {
    return users.map((user) => ({
      name: user.name,
      surname: user.surname,
      annual_leave_allowance: user.annual_leave_allowance,
    }));
  }
  return (
    <pre className="text-xs">
      {JSON.stringify(
        transformUsersForLeave(sortByLeastAnnualLeave([...data, obj])),
        null,
        2
      )}

      <div className="text-xl text-blue-500">
        SELECT name, surname, annual_leave_allowance FROM users ORDER BY
        annual_leave_allowance ASC
      </div>
    </pre>
  );
}
