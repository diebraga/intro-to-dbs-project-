import { openDb } from '@/database/openDb';

export async function setOrdersToShipped(orderIds: number[]) {
  const db = await openDb();

  try {
    // Convert the array of order IDs to a comma-separated string for the SQL query
    const orderIdsString = orderIds.join(', ');

    const updateSql = `UPDATE orders SET status = 'Shipped' WHERE order_id IN (${orderIdsString})`;
    await db.run(updateSql);

    console.log(`Orders ${orderIdsString} have been set to Shipped status.`);
  } catch (error) {
    console.error('Error updating order statuses to Shipped:', error);
    throw error;
  } finally {
    await db.close();
  }
}
