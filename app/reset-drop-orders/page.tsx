export default async function Init() {
  return (
    <div>
      <pre className="text-lg pt-10">{/* <RefreshComponent /> */}</pre>

      <div className="text-xl text-blue-500">
        INSERT INTO orders (order_id, customer_id, user_id, status, total,
        created_at)
        <br /> SELECT 1, 1, 1, {"'Shiped', 100, '2023-11-26T13:33:30.221Z'"}
        <br /> WHERE NOT EXISTS (SELECT 1 FROM orders WHERE order_id = 1);
        <br /> <br /> INSERT INTO orders (order_id, customer_id, user_id,
        status, total, created_at)
        <br /> SELECT 2, 2, 2, {"'Shiped', 150, '2023-11-26T13:33:30.221Z'"}
        <br /> WHERE NOT EXISTS (SELECT 1 FROM orders WHERE order_id = 2);
        <br /> <br /> INSERT INTO orders (order_id, customer_id, user_id,
        status, total, created_at)
        <br /> SELECT 3, 3, 3, {"'Processing', 200, '2013-04-25T00:32:08.753Z'"}
        <br /> WHERE NOT EXISTS (SELECT 1 FROM orders WHERE order_id = 3);
      </div>
    </div>
  );
}
