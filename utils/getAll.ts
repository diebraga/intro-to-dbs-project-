import { openDb } from "@/database/openDb";

type Table =
  | "customers"
  | "users"
  | "orders"
  | "product"
  | "deliveries"
  | "order_items"
  | "services"
  | "days"
  | "company_directory";

export async function getAll(table: Table) {
  const db = await openDb();

  try {
    const sql = `SELECT * FROM ${table}`;
    const itens = await db.all(sql);
    return itens;
  } catch (error) {
    console.error(`Error fetching all ${table}:`, error);
    throw error;
  } finally {
    await db.close();
  }
}
