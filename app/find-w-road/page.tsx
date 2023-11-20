import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { createCustomers } from "@/utils/createCostumers";
import { createDeliveries } from "@/utils/createDeliveries";
import { createOrderItems } from "@/utils/createOrderItems";
import { createOrders } from "@/utils/createOrders";
import { createRoles } from "@/utils/createRoles";
import { createStocks } from "@/utils/createStocks";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import { findCustomersWithRoadInAddress } from "@/utils/findCustomersWithRoadInAddress";
import Head from "next/head";

export default async function Init() {
  const data = await findCustomersWithRoadInAddress();

  return (
    <pre className="text-xs">
      {JSON.stringify(data, null, 2)}
      <div className="text-xl text-blue-500">
        SELECT * FROM customers
        <br />
        {"WHERE address LIKE '%road%'"}{" "}
      </div>
    </pre>
  );
}
