import { openDb } from "@/database/openDb";

export async function createItemForEachTable(): Promise<string> {
  const db = await openDb();

  try {
    // Insert into 'product'
    await db.run(`
      INSERT INTO product (description, price, quantity_in_stock, last_ordered_date, category, manufacturer, created_at)
      VALUES ('Gas Lawnmower', 500.00, 50, '2022-01-10', 'Lawnmowers', 'GasFacture', CURRENT_TIMESTAMP)
    `);

    // Insert into 'users'
    await db.run(`
      INSERT INTO users (username, name, surname, password, address, annual_leave_allowance, role, salary, created_at)
      VALUES ('sales_rep', 'Alice', 'Johnson', 'securePass123', '123 Greenway Blvd', 25, 'Sales Representative', 40000, CURRENT_TIMESTAMP)
    `);

    // Insert into 'customers'
    await db.run(`
      INSERT INTO customers (name, address, email, phone_number, balance, created_at)
      VALUES ('Bob Smith', '789 Oak Lane', 'bob.smith@example.com', '555-9876', 0.00, CURRENT_TIMESTAMP)
    `);

    // Insert into 'deliveries'
    await db.run(`
      INSERT INTO deliveries (order_id, delivery_date, delivered_at, delivery_method, created_at)
      VALUES (4, '2022-02-03', NULL, 'Overnight', '2021-11-25 23:32:16')
    `);

    // Insert into 'orders'
    await db.run(`
      INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at)
      VALUES (4, 4, 3, 'Processing', 200.00, CURRENT_TIMESTAMP)
    `);

    // Insert into 'order_items'
    await db.run(`
      INSERT INTO order_items (order_id, product_id, quantity, unit_price, line_total, created_at)
      VALUES (4, 1, 7, 20, 140, '2023-11-26 13:33:30')
    `);

    // Insert into 'services'
    await db.run(`
      INSERT INTO services (service_name, duration_months, monthly_cost, customer_id, order_id, created_at)
      VALUES ('Lawnmower Rental', 2, 20, NULL, NULL, '2023-11-26 13:33:30')
    `);

    return "Records added successfully";
  } catch (error) {
    console.error("Error adding records:", error);
    throw error;
  } finally {
    await db.close();
  }
}
