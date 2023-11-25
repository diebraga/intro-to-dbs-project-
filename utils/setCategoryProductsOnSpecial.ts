import { openDb } from '@/database/openDb';

export async function changeCategoryName(oldCategoryName: string, newCategoryName: string) {
  const db = await openDb();

  try {
    const updateSql = `UPDATE product SET category = ? WHERE category = ?`;
    await db.run(updateSql, newCategoryName, oldCategoryName);

    console.log(`Category '${oldCategoryName}' has been renamed to '${newCategoryName}'.`);
  } catch (error) {
    console.error('Error updating category names:', error);
    throw error;
  } finally {
    await db.close();
  }
}
