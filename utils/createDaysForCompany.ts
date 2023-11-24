import { openDb } from "@/database/openDb";
import { getAll } from "./getAll";

export async function createWeekDaysForFirstCompany() {
  const db = await openDb();

  try {
    const companies = await getAll("company_directory");
    if (companies.length === 0) {
      console.log("No companies found in company_directory.");
      return;
    }

    const firstCompany = companies[0];
    await createDaysForCompany(firstCompany.id, db);
  } catch (error) {
    console.error("Error creating week days for the first company:", error);
    throw error;
  } finally {
    await db.close();
  }
}
async function createDaysForCompany(companyId: number, db: any) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const openingHour = "08:00";
  const closingHour = "17:00";

  for (const day of daysOfWeek) {
    // Check if the day already exists for this company
    const dayExistsSql = `SELECT COUNT(*) AS count FROM days WHERE company_id = ? AND day_of_week = ?`;
    const { count } = await db.get(dayExistsSql, [companyId, day]);

    if (count === 0) {
      // Day does not exist, insert new day
      const insertSql = `INSERT INTO days (company_id, day_of_week, opening_hour, closing_hour) VALUES (?, ?, ?, ?)`;
      await db.run(insertSql, [companyId, day, openingHour, closingHour]);
      console.log(`Inserted ${day} for company ID ${companyId}`);
    } else {
      console.log(`${day} already exists for company ID ${companyId}`);
    }
  }
}
