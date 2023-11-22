import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import { createCustomers } from "@/utils/createCostumers";
import { createDeliveries } from "@/utils/createDeliveries";
import { createLawnmowerServices } from "@/utils/createLawnmowerServices";
import { createOffice } from "@/utils/createOffice";
import { createOrderItems } from "@/utils/createOrderItems";
import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { createUserForEachRole } from "@/utils/createUserForEachRole";

export default async function Init() {
  await createOffice();

  await createUserForEachRole();
  await createCustomers();
  await createOrders();
  await createOrderItems();
  await createStocks();
  await createDeliveries();
  await createLawnmowerServices();
  // await deleteAllUsers()
  // await createRoles()
  return (
    <div>
      <GetAllUsers />
      <div className="text-xl text-blue-500">SELECT * FROM users</div>
    </div>
  );
}
