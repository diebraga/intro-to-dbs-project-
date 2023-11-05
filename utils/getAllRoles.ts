import { openDb } from "../database/openDb";

export async function getAllRoles() {
    const db = await openDb();
  
    try {
      const rows = await db.all('SELECT * FROM roles');
      return rows; 
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error; 
    } finally {
      await db.close();
    }
  }