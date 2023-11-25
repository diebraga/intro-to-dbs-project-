import { getAll } from "@/utils/getAll";

export default async function Customers({ searchParams }: any) {
  // await deleteAllUsers()
  //   await createUserForEachRole()
  const data = await getAll("customers");
  const customer = {
    customer_id: 4,
    name: "Bob Smith",
    address: "789 Oak Lane",
    email: "bob.smith@example.com",
    phone_number: "555-9876",
    balance: 0.0,
    created_at: new Date().toISOString(),
  };

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? customer : "";
  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}{" "}
      <div className="text-xl text-blue-500">SELECT * FROM customers</div>
    </pre>
  );
}
