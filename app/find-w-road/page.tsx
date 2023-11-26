export default async function Init() {
  const data = [
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

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT * FROM customers
        <br />
        {"WHERE address LIKE '%road%'"}{" "}
      </div>
    </pre>
  );
}
