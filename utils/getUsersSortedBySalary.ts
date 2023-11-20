import { openDb } from "@/database/openDb";

export type UserWithRole = {
  name: string;
  surname: string;
  position: string;
  salary: number;
};

export async function getUsersSortedBySalary(by: "ASC" | "DESC"): Promise<UserWithRole[]> {
  const db = await openDb();

  try {
    const sql = `
      SELECT u.name, u.surname, u.role AS position, u.salary
      FROM users u
      ORDER BY u.salary ${by}
    `;

    const users: UserWithRole[] = await db.all(sql);
    
    return users;
  } catch (error) {
    console.error('Error fetching users sorted by salary:', error);
    throw error;
  } finally {
    await db.close();
  }
}
