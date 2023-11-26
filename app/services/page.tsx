export default async function Home({ searchParams }: any) {
  const { SET_ADDED } = searchParams;
  const data = [
    {
      service_id: 1,
      service_name: "Lawnmower Service Agreement",
      duration_months: 1,
      monthly_cost: 25,
      customer_id: null,
      order_id: null,
      created_at: "2023-11-26 13:33:30",
    },
    {
      service_id: 2,
      service_name: "Mowing by Staff for Summer",
      duration_months: 4,
      monthly_cost: 30,
      customer_id: null,
      order_id: null,
      created_at: "2023-11-26 13:33:30",
    },
    {
      service_id: 3,
      service_name: "Lawnmower Rental",
      duration_months: 5,
      monthly_cost: 20,
      customer_id: null,
      order_id: null,
      created_at: "2023-11-26 13:33:30",
    },
  ];

  const a = {
    service_id: 4,
    service_name: "Lawnmower Rental",
    duration_months: 2,
    monthly_cost: 20,
    customer_id: null,
    order_id: null,
    created_at: "2023-11-26 13:33:30",
  };
  const obj = SET_ADDED === "true" ? a : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM services</div>
    </pre>
  );
}
