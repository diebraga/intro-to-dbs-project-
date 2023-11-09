import { openDb } from "../database/openDb";

export async function updateAnnualLeaveAllowance(
  newAllowance: number
): Promise<void> {
  const db = await openDb();

  try {
    await db.run("UPDATE users SET annual_leave_allowance = ?", [newAllowance]);
    console.log(
      `Updated annual leave allowance for all users to ${newAllowance} days.`
    );
  } catch (error) {
    console.error("Error updating annual leave allowance:", error);
    throw error;
  } finally {
    await db.close();
  }
}
