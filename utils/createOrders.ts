import { openDb } from "@/database/openDb";
import { getAll } from "./getAll";

export async function createOrders() {
    const orders = await getAll("orders");
  
    if (orders.length === 0) {
      const db = await openDb();
  
      try {
        const insertOrderSql = `
          INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at) VALUES (?, ?, ?, ?, ?, ?)
        `;
  
        // Sample order data
        const newOrders = [
          { order_id: 1, customer_id: 1, user_id: 1, status: 'Processing', total: 100.00, created_at: new Date().toISOString() },
          { order_id: 2, customer_id: 2, user_id: 2, status: 'Completed', total: 150.00, created_at: new Date().toISOString() },
          { order_id: 3, customer_id: 3, user_id: 3, status: 'Pending', total: 200.00, created_at: new Date().toISOString() }
        ];
  
        for (const order of newOrders) {
          await db.run(insertOrderSql, order.order_id, order.customer_id, order.user_id, order.status, order.total, order.created_at);
        }
      } catch (error) {
        console.error('Error creating orders:', error);
        throw error;
      } finally {
        await db.close();
      }
    } else {
      console.log('Orders already exist. No new orders were added.');
    }
  }