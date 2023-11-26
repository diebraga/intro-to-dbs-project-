export default async function NewRecordsDeleted() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await deleteAddedRecords();

  return (
    <>
      <pre className="text-lg p-10">{/* <RefreshComponent /> */}</pre>

      <div className="text-xl text-blue-500">
        <div>
          {
            "DELETE FROM product WHERE description = 'GasLawnmower' AND manufacturer = 'GasFacture';"
          }
          <br />
          {
            "DELETE FROM users WHERE username = 'sales_rep' AND surname = 'Johnson';"
          }
          <br />
          {"DELETE FROM customers WHERE email = 'bob.smith@example.com';"}
          <br />
          {
            "DELETE FROM deliveries WHERE order_id = 4 AND delivery_method = 'Overnight';"
          }
          <br />
          {"DELETE FROM orders WHERE order_id = 4 AND total = 200.00;"}
          <br />
          {
            "DELETE FROM order_items WHERE order_id = 4 AND product_id = 1 AND quantity = 7;"
          }
          <br />
          {
            "DELETE FROM services WHERE service_name = 'Lawnmower Rental' AND duration_months = 2;"
          }
          <br />
        </div>
      </div>
    </>
  );
}
