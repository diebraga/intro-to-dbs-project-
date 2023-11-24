import { openDb } from "@/database/openDb";

export async function updateSundaysHours(
  openingHour: string,
  closingHour: string
) {
  const db = await openDb();

  try {
    const updateSql = `
      UPDATE days 
      SET opening_hour = ?, closing_hour = ? 
      WHERE day_of_week = 'Sunday'`;

    await db.run(updateSql, [openingHour, closingHour]);
    console.log("Updated Sundays' hours successfully.");
  } catch (error) {
    console.error("Error updating Sundays' hours:", error);
    throw error;
  } finally {
    await db.close();
  }
}
