import { openDb } from '@/database/openDb';

export async function deleteAddedRecords(): Promise<string> {
  const db = await openDb();

  try {
    // Delete from 'stock'
    await db.run(`DELETE FROM stock WHERE description = ?`, 'Royal bonds');

    // Delete from 'roles'
    await db.run(`DELETE FROM roles WHERE role_name = ?`, 'Kitchen Porter');

    // Delete from 'users'
    await db.run(`DELETE FROM users WHERE username = ?`, 'user1');

    // Delete from 'customers'
    await db.run(`DELETE FROM customers WHERE email = ?`, 'email@gmail.com');

    // Delete from 'deliveries'
    await db.run(`DELETE FROM deliveries WHERE order_id = ?`, 1);

    // Delete from 'orders'
    await db.run(`DELETE FROM orders WHERE order_id = ?`, 1);

    // Delete from 'order_items'
    await db.run(`DELETE FROM order_items WHERE order_item_id = ?`, 1);

    return "Records deleted successfully";
  } catch (error) {
    console.error('Error deleting records:', error);
    throw error;
  } finally {
    await db.close();
  }
}
