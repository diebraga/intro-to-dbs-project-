import { openDb } from "../database/openDb";

type UserDaysOff = {
  name: string;
  surname: string;
  annualLeaveAllowance: number;
};

export async function getTotalDaysOffOrdered(): Promise<UserDaysOff[]> {
  const db = await openDb();

  try {
    const results = await db.all("SELECT name, surname, annual_leave_allowance FROM users ORDER BY annual_leave_allowance ASC");
    const userDaysOff: UserDaysOff[] = results.map(user => ({
      name: user.name,
      surname: user.surname,
      annualLeaveAllowance: user.annual_leave_allowance
    }));
    
    console.log("Total days off for each user, ordered by least days off:");
    userDaysOff.forEach(user => {
      console.log(`${user.name} ${user.surname}: ${user.annualLeaveAllowance} days off`);
    });

    return userDaysOff;
  } catch (error) {
    console.error("Error fetching total days off:", error);
    throw error;
  } finally {
    await db.close();
  }
}
