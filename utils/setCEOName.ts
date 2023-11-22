import { openDb } from "@/database/openDb";

export async function setCEOName(name: string, surname: string): Promise<void> {
  const db = await openDb();

  try {
    const sqlUpdate = `
      UPDATE users
      SET name = ?, surname = ?
      WHERE role = 'ceo'
    `;
    await db.run(sqlUpdate, [name, surname]);
    console.log(`The CEO's name has been updated to ${name} ${surname}.`);
  } catch (error) {
    console.error("Error updating the CEO's name:", error);
    throw error;
  } finally {
    await db.close();
  }
}
