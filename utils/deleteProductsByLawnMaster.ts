import { openDb } from "@/database/openDb";

export async function deleteProductsByLawnMaster() {
  const db = await openDb();

  try {
    const sql = `DELETE FROM product WHERE manufacturer = 'LawnMaster'`;
    const result = await db.run(sql);

    console.log(
      `${result.changes} products manufactured by LawnMaster deleted.`
    );
  } catch (error) {
    console.error("Error deleting products manufactured by LawnMaster:", error);
    throw error;
  } finally {
    await db.close();
  }
}
