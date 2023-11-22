import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { getAll } from "@/utils/getAll";
import { getUsersSortedBySalary } from "@/utils/getUsersSortedBySalary";
import { setAllOrdersToProcessing } from "@/utils/setAllOrdersStatusToProccessing";
import { setCEOName } from "@/utils/setCEOName";
import { setOrdersToShipped } from "@/utils/setPayedToShiped";

export default async function SetSeo() {
  await setCEOName("Diego", "Braga");
  const data = await getAll("users");

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        UPDATE users
        <br />
        {"SET name = 'Diego', "}
        <br />
        {"surname = 'Braga',"}
        <br />
        {"WHERE role_id = 'ceo'"}
        <br />
      </div>
    </pre>
  );
}
