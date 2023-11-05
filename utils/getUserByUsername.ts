import { User } from '@/@types';
import { openDb } from '@/database/openDb';

export async function getUserByUsername(username: string) {
  const db = await openDb();
  try {
    const user: User | undefined = await db.get('SELECT * FROM users WHERE username = ?', [username]);
    return user;
  } catch (error) {
    console.error(`Error fetching user with username ${username}:`, error);
    throw error;
  } finally {
    await db.close();
  }
}
