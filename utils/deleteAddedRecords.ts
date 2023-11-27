import { openDb } from "@/database/openDb";

export async function deleteAddedRecordsById(): Promise<void> {
  const db = await openDb();

  try {
    // Delete product with ID 4
    await db.run(`DELETE FROM product WHERE product_id = 4`);

    // Delete user with ID 4
    await db.run(`DELETE FROM users WHERE id = 4`);

    // Delete customer with ID 4
    await db.run(`DELETE FROM customers WHERE customer_id = 4`);

    // Delete delivery with delivery_id 4
    await db.run(`DELETE FROM deliveries WHERE delivery_id = 4`);

    // Delete order with order_id 4
    await db.run(`DELETE FROM orders WHERE order_id = 4`);

    // Delete order item with order_item_id 4
    await db.run(`DELETE FROM order_items WHERE order_item_id = 4`);

    // Delete service with service_id 4
    await db.run(`DELETE FROM services WHERE service_id = 4`);
  } catch (error) {
    console.error("Error deleting records with ID 4:", error);
    throw error;
  } finally {
    await db.close();
  }
}
