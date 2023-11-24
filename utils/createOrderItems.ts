import { openDb } from '@/database/openDb';

type OrderItem = {
  order_item_id: number;
  order_id: number;
  stock_id: number;
  quantity: number;
  unit_price: number;
};

export async function createOrderItems(): Promise<void> {
  const db = await openDb();

  try {
    const orderItems: OrderItem[] = [
      { order_item_id: 1, order_id: 1, stock_id: 1, quantity: 10, unit_price: 20.00 },
      { order_item_id: 2, order_id: 1, stock_id: 2, quantity: 5, unit_price: 30.00 },
      { order_item_id: 3, order_id: 2, stock_id: 1, quantity: 7, unit_price: 20.00 }
    ];

    for (const item of orderItems) {
      // Check if the order item already exists
      const sqlCheck = `SELECT COUNT(*) as count FROM order_items WHERE order_item_id = ?`;
      const { count } = (await db.get(sqlCheck, item.order_item_id));

      if (count === 0) {
        // Order item does not exist, so insert it
        const sqlInsert = `
          INSERT INTO order_items (order_item_id, order_id, stock_id, quantity, unit_price, line_total, created_at)
          VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `;
        await db.run(sqlInsert, item.order_item_id, item.order_id, item.stock_id, item.quantity, item.unit_price, item.quantity * item.unit_price);
        console.log(`Order item ${item.order_item_id} inserted successfully.`);
      }
    }
  } catch (error) {
    console.error('Error creating order items:', error);
    throw error;
  } finally {
    await db.close();
  }
}
