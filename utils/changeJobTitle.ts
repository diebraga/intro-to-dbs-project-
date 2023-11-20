import { openDb } from "../database/openDb";

export async function changeJobTitle(currentTitle: string, newTitle: string): Promise<void> {
  const db = await openDb();

  try {
    // Update the role of users having the current job title
    await db.run("UPDATE users SET role = ? WHERE role = ?", [newTitle, currentTitle]);
    console.log(`Changed job title from '${currentTitle}' to '${newTitle}' for all applicable users.`);
  } catch (error) {
    console.error("Error changing job titles:", error);
    throw error;
  } finally {
    await db.close();
  }
}
