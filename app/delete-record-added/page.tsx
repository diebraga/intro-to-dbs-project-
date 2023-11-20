import { RefreshComponent } from "@/components/RefreshComponent/RefreshComponent";
import { createItemForEachTable } from "@/utils/createItemForEachTable";
import { createOrderItems } from "@/utils/createOrderItems";
import { deleteAddedRecords } from "@/utils/deleteAddedRecords";
import { getAll } from "@/utils/getAll";

export default async function NewRecordsDeleted() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await deleteAddedRecords();

  return (
    <>
      <pre className="text-lg p-10">
        {"Action won't work in production"}
        <RefreshComponent />
      </pre>

      <div className="text-xl text-blue-500">
        {"`DELETE FROM stock WHERE description = ?`, 'Royal bonds'"}
        <br />
        {"`DELETE FROM users WHERE username = ?`, 'user1'"}
        <br />

        {"`DELETE FROM customers WHERE email = ?`, 'email@gmail.com'"}
        <br />

        {"`DELETE FROM deliveries WHERE order_id = ?`, 4"}
        <br />

        {"`DELETE FROM orders WHERE order_id = ?`, 4"}
        <br />

        {" `DELETE FROM order_items WHERE order_item_id = ?`, 4"}
      </div>
    </>
  );
}
