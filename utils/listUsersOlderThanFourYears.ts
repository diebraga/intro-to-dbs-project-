import { openDb } from '@/database/openDb';

export async function listUsersOlderThanFourYears() {
  const db = await openDb();

  try {
    const fourYearsAgo = new Date();
    fourYearsAgo.setFullYear(fourYearsAgo.getFullYear() - 4);

    const sql = `
      SELECT * FROM users
      WHERE created_at < ?
    `;

    const users = await db.all(sql, [fourYearsAgo.toISOString().split('T')[0]]);
    return users;
  } catch (error: any) {
    console.error(error.message);
    return [];
  } finally {
    await db.close();
  }
}
