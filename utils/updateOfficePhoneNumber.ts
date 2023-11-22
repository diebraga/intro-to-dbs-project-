import { openDb } from "../database/openDb";

export async function updateOfficePhoneNumber(
  companyName: string,
  newPhoneNumber: string
): Promise<void> {
  const db = await openDb();

  try {
    const sql = `
      UPDATE company_directory
      SET phone_number = ?
      WHERE name_company = ?
    `;

    await db.run(sql, [newPhoneNumber, companyName]);
    console.log(`Updated phone number for ${companyName} to ${newPhoneNumber}`);
  } catch (error: any) {
    console.error("Error updating office phone number:", error.message);
  } finally {
    await db.close();
  }
}
