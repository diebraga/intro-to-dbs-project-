import { openDb } from "@/database/openDb";

export async function findLongTermExpensiveServices() {
  const db = await openDb();

  try {
    const sql = `
      SELECT * FROM services
      WHERE duration_months > 3 AND monthly_cost >= 20
    `;

    const services = await db.all(sql);
    return services;
  } catch (error: any) {
    console.error(error.message);
    return [];
  } finally {
    await db.close();
  }
}
