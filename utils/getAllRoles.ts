import { Role } from "@/@types";
import { openDb } from "../database/openDb";

export async function getAllRoles(): Promise<Role[]> {
  const db = await openDb();

  try {
    const rows: Role[] = await db.all('SELECT * FROM roles');
    return rows; 
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error; 
  } finally {
    await db.close();
  }
}