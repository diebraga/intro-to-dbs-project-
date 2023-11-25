import { openDb } from "@/database/openDb";
import { getAll } from "./getAll";

export async function createOrders() {
  const existingOrders = await getAll("orders");

  const db = await openDb();

  try {
    const insertOrderSql = `
      INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at) VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Get the date that is 7 months in the past
    const sevenMonthsAgo = new Date();
    sevenMonthsAgo.setMonth(sevenMonthsAgo.getMonth() - 7);

    // Sample order data
    const newOrders = [
      {
        order_id: 1,
        customer_id: 1,
        user_id: 1,
        status: "Processing",
        total: 100.0,
        created_at: new Date().toISOString(),
      },
      {
        order_id: 2,
        customer_id: 2,
        user_id: 2,
        status: "Processing",
        total: 150.0,
        created_at: new Date().toISOString(),
      },
      {
        order_id: 3,
        customer_id: 3,
        user_id: 3,
        status: "Processing",
        total: 200.0,
        created_at: "2013-04-25T00:32:08.753Z",
      },
    ];

    for (const order of newOrders) {
      const orderExists = existingOrders.some(
        (existingOrder) => existingOrder.order_id === order.order_id
      );
      if (!orderExists) {
        await db.run(
          insertOrderSql,
          order.order_id,
          order.customer_id,
          order.user_id,
          order.status,
          order.total,
          order.created_at
        );
      }
    }
  } catch (error) {
    console.error("Error creating orders:", error);
    throw error;
  } finally {
    await db.close();
  }
}
