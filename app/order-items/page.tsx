export default async function Home({ searchParams }: any) {
  const { SET_ADDED } = searchParams;

  const data = [
    {
      order_item_id: 1,
      order_id: 1,
      product_id: 1,
      quantity: 10,
      unit_price: 20,
      line_total: 200,
      created_at: "2023-11-26 13:33:30",
    },
    {
      order_item_id: 2,
      order_id: 1,
      product_id: 2,
      quantity: 5,
      unit_price: 30,
      line_total: 150,
      created_at: "2023-11-26 13:33:30",
    },
    {
      order_item_id: 3,
      order_id: 2,
      product_id: 1,
      quantity: 7,
      unit_price: 20,
      line_total: 140,
      created_at: "2023-11-26 13:33:30",
    },
  ];

  const a = {
    order_item_id: 4,
    order_id: 4,
    product_id: 1,
    quantity: 7,
    unit_price: 20,
    line_total: 140,
    created_at: "2023-11-26 13:33:30",
  };
  const obj = SET_ADDED === "true" ? a : "";

  return (
    <pre className="text-xs">
      {JSON.stringify([...data, obj], null, 2)}
      <div className="text-xl text-blue-500">SELECT * FROM order_items</div>
    </pre>
  );
}
