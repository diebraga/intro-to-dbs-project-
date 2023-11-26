import GetAllUsers from "@/components/GetAllUsers/GetAllUsers";

export default async function Init() {
  try {
    // await createOffice();
    // await createWeekDaysForFirstCompany();
    // await createProducts();
    // await createUserForEachRole();
    // await createCustomers();
    // await createOrders();
    // await createOrderItems();
    // await createDeliveries();
    // await createLawnmowerServices();
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
