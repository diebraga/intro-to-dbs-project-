export default async function Delivery({ searchParams }: any) {
  const { SET_ADDED, SET_ALL_COUL } = searchParams;
  const delivery_method = SET_ALL_COUL === "true" ? "Courier" : "Overnight";
  const data = [
    {
      delivery_id: 1,
      order_id: 1,
      delivery_date: "2023-02-01",
      delivered_at: null,
      delivery_method: "Standard",
      created_at: "2023-11-26 13:33:30",
    },
    {
      delivery_id: 2,
      order_id: 2,
      delivery_date: "2023-02-02",
      delivered_at: null,
      delivery_method: "Express",
      created_at: "2023-11-26 13:33:30",
    },
    {
      delivery_id: 3,
      order_id: 3,
      delivery_date: "2023-02-03",
      delivered_at: null,
      delivery_method: "Overnight",
      created_at: "2023-11-26 13:33:30",
    },
  ];
  const service = {
    delivery_id: 4,
    order_id: 4,
    delivery_date: "2022-02-03",
    delivered_at: null,
    delivery_method,
    created_at: "2021-11-25 23:32:16",
  };
  const obj = SET_ADDED === "true" ? service : {};

  return (
    <pre className="text-xs">
      {JSON.stringify(
        [...data, obj].filter((item) => item?.hasOwnProperty("delivery_id")),
        null,
        2
      )}
      <div className="text-xl text-blue-500">SELECT * FROM deliveries</div>
    </pre>
  );
}
