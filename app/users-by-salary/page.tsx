export default async function UsersBySalary({ searchParams }: any) {
  const { SET_ADDED, USER_ROLE } = searchParams;
  const role = USER_ROLE;

  const arr = [
    {
      id: 1,
      username: "diebraga",
      name: "Diego",
      surname: "Braga",
      password: "$2a$10$fxXyOXqqDo5nEzSjB8e3pe3gOkNWCMuy7ZbMglB133XF27gD8aAPG",
      address: "Road 42 High Street",
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
    role: "Sales Representative",
    salary: 40000,
    created_at: "2021-01-10",
  };
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
        renderUsers(sortUsersByHighestSalary([...arr, obj])),
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
