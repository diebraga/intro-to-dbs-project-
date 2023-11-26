export default async function Customers({ searchParams }: any) {
  const data = [
    {
      customer_id: 1,
      name: "John Doe",
      address: "123 Maple Street",
      email: "john.doe@example.com",
      phone_number: "555-1234",
      balance: null,
      created_at: "2023-11-26 13:33:30",
    },
    {
      customer_id: 2,
      name: "Jane Smith",
      address: "456 Elm Street Road",
      email: "jane.smith@example.com",
      phone_number: "555-5678",
      balance: null,
      created_at: "2023-11-26 13:33:30",
    },
    {
      customer_id: 3,
      name: "Alice Johnson",
      address: "789 Oak Avenue Road",
      email: "alice.johnson@example.com",
      phone_number: "555-9012",
      balance: null,
      created_at: "2023-11-26 13:33:30",
    },
  ];
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
