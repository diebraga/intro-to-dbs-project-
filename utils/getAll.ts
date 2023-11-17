import { openDb } from '@/database/openDb';

type Table = "customers" | "roles" | "users" |"orders"|"stock"|"deliveries"|"order_items"
export async function getAll(table: Table) {
  const db = await openDb();

  try {
    const sql = `SELECT * FROM ${table}`;
    const customers = await db.all(sql);
    return customers;
  } catch (error) {
    console.error(`Error fetching all ${table}:`, error);
    throw error; 
  } finally {
    await db.close();
  }
}
