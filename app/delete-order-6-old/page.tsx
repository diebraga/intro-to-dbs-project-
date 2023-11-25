import { RenderComponent } from "@/components/RenderComponent/RenderComponent";
import { getAll } from "@/utils/getAll";

export default async function Orders() {
  // await deleteAllUsers()
  // await deleteOrder6monthsOld();
  const data = await getAll("orders");

  return (
    <pre className="text-xs">
      <RenderComponent
        data={data}
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
