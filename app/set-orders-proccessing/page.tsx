import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { createOrders } from "@/utils/createOrders";
import { getAll } from "@/utils/getAll";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";

export default async function Orders({ searchParams }: any) {
  // await deleteAllUsers()
  await setAllOrdersToProcessing();
  const data = await getAll("orders");
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
