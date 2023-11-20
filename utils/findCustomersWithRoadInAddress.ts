import { openDb } from "@/database/openDb";

export async function findCustomersWithRoadInAddress() {
  const db = await openDb();

  try {
    const sql = `
      SELECT * FROM customers
      WHERE address LIKE '%road%'
    `;

    const customers = await db.all(sql);
    return customers;
  } catch (error: any) {
    console.error(error.message);
    return [];
  } finally {
    await db.close();
  }
}
