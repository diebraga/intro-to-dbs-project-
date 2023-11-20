import { RefreshComponent } from "@/components/RefreshComponent/RefreshComponent";
import { createItemForEachTable } from "@/utils/createItemForEachTable";
import { createOrderItems } from "@/utils/createOrderItems";
import { getAll } from "@/utils/getAll";
import { useRouter } from "next/navigation";

export default async function NewRecords() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await createItemForEachTable();

  return (
    <>
      <pre className="text-lg p-10">
        {"Action won't work in production"}
        <RefreshComponent />
      </pre>

      <div className="text-xl text-blue-500">
        INSERT INTO stock
        <br />
        (description, price, quantity_in_stock, last_ordered_date, created_at,
        updated_at)
        <br />
        VALUES
        {
          "('Royal bonds', 20.50, 100, '2023-01-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);"
        }
        <br />
        <br />
        INSERT INTO users
        <br />
        (username, name, surname, password, annual_leave_allowance, role,
        salary, created_at)
        <br />
        VALUES
        {
          "('user1', 'John', 'Ross', 'password123', 20, 'Sales Manager', 50000, CURRENT_TIMESTAMP);"
        }
        <br />
        <br />
        INSERT INTO customers
        <br />
        (name, address, email, phone_number, balance, created_at)
        <br />
        {
          "VALUES ('Fernando Alicante', '123 Main Street', 'email@gmail.com', '555-1234', 100.00, CURRENT_TIMESTAMP);"
        }
        <br />
        <br />
        INSERT INTO deliveries
        <br />
        (order_id, delivery_date, delivered_at, created_at)
        <br />
        {"VALUES (4, '2023-02-04', NULL, CURRENT_TIMESTAMP);"}
        INSERT INTO orders
        <br />
        (customer_id, user_id, status, total, created_at)
        <br />
        {"VALUES (1, 1, 'Processing', 150.00, CURRENT_TIMESTAMP);"}
        <br />
        <br />
        INSERT INTO order_items
        <br />
        (order_item_id, order_id, stock_id, quantity, unit_price, line_total,
        created_at, updated_at)
        <br />
        VALUES (4, 1, 2, 10, 15.00, 150.00, CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP);
      </div>
    </>
  );
}
