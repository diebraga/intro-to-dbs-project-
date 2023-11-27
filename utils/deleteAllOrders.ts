import { openDb } from "@/database/openDb";

export async function deleteAllOrders(): Promise<void> {
  const db = await openDb();

  try {
    // Delete all records from 'orders'
    await db.run(`DELETE FROM orders`);

    console.log("All orders have been deleted.");
  } catch (error) {
    console.error("Error deleting all orders:", error);
    throw error;
  } finally {
    await db.close();
  }
}
