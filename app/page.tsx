import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";
import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import Menu from "@/components/Menu/Menu";
import { createCustomers } from "@/utils/createCostumers";
import { createOrderItems } from "@/utils/createOrderItems";
import { createOrders } from "@/utils/createOrders";
import { createRoles } from "@/utils/createRoles";
import { createUserForEachRole } from "@/utils/createUserForEachRole";
import { deleteAllUsers } from "@/utils/deleteAllUsers";
import Head from "next/head";

export default async function Home() {
  // await deleteAllUsers()
  // await createUserForEachRole()
  // await createCustomers()
  // await createOrders()
  // await createOrderItems()

  return (
    <div>
      <GetAllUsers />
    </div>
  );
}
