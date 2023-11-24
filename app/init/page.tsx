import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import { createCustomers } from "@/utils/createCostumers";
import { createWeekDaysForFirstCompany } from "@/utils/createDaysForCompany";
import { createDeliveries } from "@/utils/createDeliveries";
import { createLawnmowerServices } from "@/utils/createLawnmowerServices";
import { createOffice } from "@/utils/createOffice";
import { createOrderItems } from "@/utils/createOrderItems";
import { createOrders } from "@/utils/createOrders";
import { createStocks } from "@/utils/createStocks";
import { createUserForEachRole } from "@/utils/createUserForEachRole";

export default async function Init() {
  try {
    await createOffice();
    await createWeekDaysForFirstCompany();
    await createStocks();
    await createUserForEachRole();
    await createCustomers();
    await createOrders();
    await createOrderItems();
    await createDeliveries();
    await createLawnmowerServices();
  } catch (error) {
    console.error("Error initializing the database:", error);
  } // await deleteAllUsers()
  // await createRoles()
  return (
    <div>
      <GetAllUsers />
      <div className="text-xl text-blue-500">SELECT * FROM users</div>
    </div>
  );
}
