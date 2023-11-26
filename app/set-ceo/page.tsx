import { processString } from "../page";

export default async function SetSeo({ searchParams }: any) {
  const { ALLOWANCE } = searchParams;

  return (
    <pre className="text-xs">
      {JSON.stringify(
        [
          {
            id: 1,
            username: "diebraga",
            name: "Michael",
            surname: "Dean",
            password:
              "$2a$10$fxXyOXqqDo5nEzSjB8e3pe3gOkNWCMuy7ZbMglB133XF27gD8aAPG",
            address: "Road 42 High Street",
            annual_leave_allowance: processString(ALLOWANCE)[0],
            role: "ceo",
            salary: 90000,
            created_at: "2021-01-10",
          },
        ],
        null,
        2
      )}

      <div className="text-xl text-blue-500">
        UPDATE users
        <br />
        {"SET name = 'Michael', "}
        <br />
        {"surname = 'Dean',"}
        <br />
        {"WHERE role = 'ceo'"}
        <br />
      </div>
    </pre>
  );
}
