import { RenderComponent } from "@/components/RenderComponent/RenderComponent";

export default async function Orders({ searchParams }: any) {
  const data = [
    {
      order_id: 1,
      customer_id: 1,
      user_id: 1,
      status: "Processing",
      total: 100,
      created_at: "2023-11-26T13:33:30.221Z",
    },
    {
      order_id: 2,
      customer_id: 2,
      user_id: 2,
      status: "Processing",
      total: 150,
      created_at: "2023-11-26T13:33:30.221Z",
    },
    {
      order_id: 3,
      customer_id: 3,
      user_id: 3,
      status: "Processing",
      total: 200,
      created_at: "2013-04-25T00:32:08.753Z",
    },
  ];
  const order = {
    order_id: 4,
    customer_id: 4,
    user_id: 3,
    status: "Processing",
    total: 200,
    created_at: "2022-04-25T00:32:08.753Z",
  };

  const { SET_ADDED } = searchParams;

  const obj = SET_ADDED === "true" ? order : "";
  return (
    <pre className="text-xs">
      <RenderComponent
        data={[...data, obj]}
        query="DEL_6_MONTHS"
        k="created_at"
        field="2013-04-25T00:32:08.753Z"
        count={false}
      />{" "}
      <div className="text-xl text-blue-500">
        {"UPDATE orders SET status = 'Processing'"}
      </div>
    </pre>
  );
}
