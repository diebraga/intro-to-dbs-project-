import { processString, splitString } from "../page";

export default async function Users({ searchParams }: any) {
  const { SET_ADDED, ALLOWANCE, CEO } = searchParams;
  const [name, surname] = splitString(CEO);

  const arr = [
    {
      id: 1,
      username: "diebraga",
      name,
      surname,
      password: "$2a$10$fxXyOXqqDo5nEzSjB8e3pe3gOkNWCMuy7ZbMglB133XF27gD8aAPG",
      address: "Road 42 High Street",
      annual_leave_allowance: processString(ALLOWANCE)[0],
      role: "ceo",
      salary: 90000,
      created_at: "2021-01-10",
    },
    {
      id: 2,
      username: "anasilva",
      name: "Ana",
      surname: "Silva",
      password: "$2a$10$/P.9D/HCsqJvdiEOpPQ7zeXMoQgO6WQPPoy0N5P9MkHKXtkf6krV.",
      address: "238 Chuo Dori",
      annual_leave_allowance: processString(ALLOWANCE)[1],
      role: "Administrator",
      salary: 50000,
      created_at: "2021-01-10",
    },
    {
      id: 3,
      username: "luizcosta",
      name: "Luiz",
      surname: "Costa",
      password: "$2a$10$LcRMJjHOuFcSIIsLhcgdGuoHR7E.syB7GkFcTSmV9aUYo6ldRbCDO",
      address: "Road EH1 1TG Scotland, UK",
      annual_leave_allowance: processString(ALLOWANCE)[2],
      role: "Office Worker",
      salary: 40000,
      created_at: "2015-04-15",
    },
  ];
  const userObject = {
    id: 4,
    username: "sales_rep",
    name: "Alice",
    surname: "Johnson",
    password: "securePass123",
    address: "123 Greenway Blvd",
    annual_leave_allowance: processString(ALLOWANCE)[3],
    role: "Sales Representative",
    salary: 40000,
    created_at: "2021-01-10",
  };
  const obj = SET_ADDED === "true" ? userObject : null;

  function sortByLeastAnnualLeave(users: any[]): any[] {
    return [...users].sort(
      (a, b) => a?.annual_leave_allowance - b?.annual_leave_allowance
    );
  }

  function transformUsersForLeave(users: any[]): any[] {
    return users.map((user) => ({
      name: user?.name,
      surname: user?.surname,
      annual_leave_allowance: user?.annual_leave_allowance,
    }));
  }
  return (
    <pre className="text-xs">
      {JSON.stringify(
        sortByLeastAnnualLeave([...arr, obj]).filter(
          (item) => item?.hasOwnProperty("name")
        ),
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
