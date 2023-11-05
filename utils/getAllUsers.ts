import { User } from '@/@types';
import { openDb } from '@/database/openDb';

export async function getAllUsers() {
  const db = await openDb();

  try {
    const sql = `SELECT * FROM users`;
    const users: User[] = await db.all(sql);
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error; 
  } finally {
    await db.close();
  }
}
