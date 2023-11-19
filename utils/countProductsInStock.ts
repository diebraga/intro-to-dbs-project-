import { openDb } from "../database/openDb";

export async function countProductsInStock(): Promise<number> {
  const db = await openDb();

  try {
    const result = await db.get("SELECT COUNT(*) as count FROM stock");
    console.log(`Number of products in stock: ${result.count}`);
    return result.count;
  } catch (error) {
    console.error("Error counting products in stock:", error);
    throw error;
  } finally {
    await db.close();
  }
}
