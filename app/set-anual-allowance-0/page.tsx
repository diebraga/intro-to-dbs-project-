import { processString, splitString } from "../page";

export default async function Home({ searchParams }: any) {
  // await deleteAllUsers()
  // await createUserForEachRole()
  const { SET_ADDED, ALLOWANCE, USER_ROLE, CEO } = searchParams;
  const role = USER_ROLE;
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
      role,
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
      role,
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
  const obj = SET_ADDED === "true" ? userObject : {};

  return (
    <pre className="text-xs">
      {JSON.stringify(
        [...arr, obj].filter((item) => item?.hasOwnProperty("id")),
        null,
        2
      )}
      <div className="text-xl text-blue-500">
        UPDATE users SET annual_leave_allowance = ?, [randomNumbers]
      </div>
    </pre>
  );
}
