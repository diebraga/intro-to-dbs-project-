import { openDb } from "../database/openDb";

export async function updateAnnualLeaveAllowance(param: 29 | 'random'): Promise<void> {
  const db = await openDb();

  try {
    if (param === 29) {
      // Set all users' annual leave allowance to 29
      await db.run("UPDATE users SET annual_leave_allowance = 29");
      console.log("Updated annual leave allowance for all users to 29 days.");
    } else if (param === 'random') {
      // Set each user's annual leave allowance to a random number between 0 and 30
      const users = await db.all("SELECT id FROM users");
      for (const user of users) {
        const randomAllowance = Math.floor(Math.random() * 31); // Generate a random number between 0 and 30
        await db.run("UPDATE users SET annual_leave_allowance = ? WHERE id = ?", [randomAllowance, user.id]);
        console.log(`Updated user ${user.id} with annual leave allowance of ${randomAllowance} days.`);
      }
    } else {
      console.log("Invalid parameter. Use 0 for resetting to 0, or 'random' for random values.");
    }
  } catch (error) {
    console.error("Error updating annual leave allowances:", error);
    throw error;
  } finally {
    await db.close();
  }
}
