import { openDb } from '@/database/openDb';

export async function createItemForEachTable(): Promise<string> {
  const db = await openDb();

  try {
    // Check and insert into 'stock'
    const stockExists = await db.get(`SELECT COUNT(*) as count FROM stock WHERE description = ?`, 'Royal bonds');
    if (stockExists.count === 0) {
      await db.run(`INSERT INTO stock (description, price, quantity_in_stock, last_ordered_date, created_at, updated_at) VALUES ('Royal bonds', 20.50, 100, '2023-01-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`);
    }

    // Check and insert into 'roles'
    const roleExists = await db.get(`SELECT COUNT(*) as count FROM roles WHERE role_name = ?`, 'Kitchen Porter');
    if (roleExists.count === 0) {
      await db.run(`INSERT INTO roles (role_name, description, created_at) VALUES ('Kitchen Porter', 'Manages the kitchen', CURRENT_TIMESTAMP)`);
    }

    // Check and insert into 'users'
    const userExists = await db.get(`SELECT COUNT(*) as count FROM users WHERE username = ?`, 'user1');
    if (userExists.count === 0) {
      await db.run(`INSERT INTO users (username, name, surname, password, annual_leave_allowance, role_id, salary, created_at) VALUES ('user1', 'John', 'Ross', 'password123', 20, 1, 50000, CURRENT_TIMESTAMP)`);
    }

    // Check and insert into 'customers'
    const customerExists = await db.get(`SELECT COUNT(*) as count FROM customers WHERE email = ?`, 'email@gmail.com');
    if (customerExists.count === 0) {
      await db.run(`INSERT INTO customers (name, address, email, phone_number, balance, created_at) VALUES ('Fernando Alicante', '123 Main Street', 'email@gmail.com', '555-1234', 100.00, CURRENT_TIMESTAMP)`);
    }

    // Check and insert into 'deliveries'
    const deliveryExists = await db.get(`SELECT COUNT(*) as count FROM deliveries WHERE order_id = ?`, 4);
if (deliveryExists.count === 0) {
  await db.run(`INSERT INTO deliveries (order_id, delivery_date, delivered_at, created_at) VALUES (4, '2023-02-04', NULL, CURRENT_TIMESTAMP)`);
}

    // Check and insert into 'orders'
    const orderExists = await db.get(`SELECT COUNT(*) as count FROM orders WHERE order_id = ?`, 1);
    if (orderExists.count === 0) {
      await db.run(`INSERT INTO orders (customer_id, user_id, status, total, created_at) VALUES (1, 1, 'Processing', 150.00, CURRENT_TIMESTAMP)`);
    }
// Check and insert into 'order_items'
const orderItemExists = await db.get(`SELECT COUNT(*) as count FROM order_items WHERE order_item_id = ?`, 4);
if (orderItemExists.count === 0) {
  await db.run(`INSERT INTO order_items (order_item_id, order_id, stock_id, quantity, unit_price, line_total, created_at, updated_at) VALUES (4, 1, 2, 10, 15.00, 150.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`);
}

    return "Records added successfully";
  } catch (error) {
    console.error('Error adding records:', error);
    throw error;
  } finally {
    await db.close();
  }
}
