import { openDb } from '@/database/openDb';

export async function setAllOrdersToProcessing() {
  const db = await openDb();

  try {
    const updateSql = `UPDATE orders SET status = 'Processing'`;
    await db.run(updateSql);

    console.log('All orders have been set to Processing status.');
  } catch (error) {
    console.error('Error updating order statuses:', error);
    throw error;
  } finally {
    await db.close();
  }
}
