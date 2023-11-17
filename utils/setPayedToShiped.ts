import { openDb } from '@/database/openDb';

export async function setOrdersToShipped() {
  const db = await openDb();

  try {
    const updateSql = `UPDATE orders SET status = 'Shipped' WHERE order_id IN (1, 2)`;
    await db.run(updateSql);

    console.log('Orders 1 and 2 have been set to Shipped status.');
  } catch (error) {
    console.error('Error updating order statuses to Shipped:', error);
    throw error;
  } finally {
    await db.close();
  }
}
