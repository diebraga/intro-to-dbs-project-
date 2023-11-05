import { openDb } from "@/database/openDb";

export async function deleteAllUsers() {
  const db = await openDb();

  try {
    await db.run('DELETE FROM users');
    console.log('All users have been deleted successfully.');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error deleting users:', error.message);
    } else {
      console.error('An unexpected error occurred', error);
    }
  } finally {
    await db.close();
  }
}

