import { openDb } from "@/database/openDb";

export async function deleteOrder6monthsOld() {
  const db = await openDb();

  try {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const deleteSql = `DELETE FROM orders WHERE created_at < ?`;
    const result = await db.run(deleteSql, sixMonthsAgo.toISOString());

    console.log(`${result.changes} orders older than 6 months have been deleted.`);
  } catch (error) {
    console.error('Error deleting orders older than 6 months:', error);
    throw error;
  } finally {
    await db.close();
  }
}
