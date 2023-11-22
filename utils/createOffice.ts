import { openDb } from "../database/openDb";
import { getAll } from "./getAll";

export async function createOffice(): Promise<void> {
  const db = await openDb();
  const officeExists = await getAll("company_directory");

  if (officeExists.length < 1) {
    try {
      const sql = `
          INSERT INTO company_directory (name_company, phone_number, address, email)
          VALUES ('Introduction to dbs Company', '01-2345678', '123 Castle Street, Exampville', 'intro-to-dbs@company.com')
        `;

      await db.run(sql);
      console.log("Specific office created: Castle Company");
    } catch (error: any) {
      console.error("Error creating specific office:", error.message);
    } finally {
      await db.close();
    }
  } else {
    await db.close();
  }
}
