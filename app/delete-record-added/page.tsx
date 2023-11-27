export default async function NewRecordsDeleted() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await deleteAddedRecords();

  return (
    <>
      <pre className="text-lg p-10">{/* <RefreshComponent /> */}</pre>

      <div className="text-xl text-blue-500">
        <div>
          {"DELETE FROM product WHERE product_id = 4;"}
          <br />
          {"DELETE FROM users WHERE id = 4;"}
          <br />
          {"DELETE FROM customers WHERE customer_id = 4;"}
          <br />
          {"DELETE FROM deliveries WHERE delivery_id = 4;"}
          <br />
          {"DELETE FROM orders WHERE order_id = 4;"}
          <br />
          {"DELETE FROM order_items WHERE order_item_id = 4;"}
          <br />
          {"DELETE FROM services WHERE service_id = 4;"}
          <br />
        </div>
      </div>
    </>
  );
}
