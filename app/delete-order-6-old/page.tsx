import { RenderComponent } from "@/components/RenderComponent/RenderComponent";

export default async function Orders({ searchParams }: any) {
  // await deleteAllUsers()
  const { SET_ADDED, ALL_PROCESSING, DROP } = searchParams;
  const status = ALL_PROCESSING === "true" ? "Processing" : "Shiped";
  const drop = DROP === "true";

  const data = [
    {
      order_id: 1,
      customer_id: 1,
      user_id: 1,
      status,
      total: 100,
      created_at: "2023-11-26T13:33:30.221Z",
    },
    {
      order_id: 2,
      customer_id: 2,
      user_id: 2,
      status,
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

  const obj = SET_ADDED === "true" ? order : {};
  return (
    <pre className="text-xs">
      <RenderComponent
        data={
          !drop
            ? [...data, obj].filter((item) => item?.hasOwnProperty("status"))
            : []
        }
        query="DEL_6_MONTHS"
        k="created_at"
        field="2013-04-25T00:32:08.753Z"
        count={false}
      />
      <div className="text-xl text-blue-500">
        {"DELETE FROM orders WHERE created_at < 'DATE';"}
      </div>
    </pre>
  );
}
