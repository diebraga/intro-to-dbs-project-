import { openDb } from "@/database/openDb";

type DeliveryItem = {
  delivery_id: number;
  order_id: number;
  delivery_date: string;
  delivery_method: string; // Added field
};

export async function createDeliveries(): Promise<void> {
  const db = await openDb();

  try {
    const deliveryItems: DeliveryItem[] = [
      {
        delivery_id: 1,
        order_id: 1,
        delivery_date: "2023-02-01",
        delivery_method: "Standard",
      },
      {
        delivery_id: 2,
        order_id: 2,
        delivery_date: "2023-02-02",
        delivery_method: "Express",
      },
      {
        delivery_id: 3,
        order_id: 3,
        delivery_date: "2023-02-03",
        delivery_method: "Overnight",
      },
    ];

    for (const item of deliveryItems) {
      // Check if the delivery item already exists
      const sqlCheck = `SELECT COUNT(*) as count FROM deliveries WHERE delivery_id = ?`;
      const { count } = await db.get(sqlCheck, item.delivery_id);

      if (count === 0) {
        // Delivery item does not exist, so insert it
        const sqlInsert = `
          INSERT INTO deliveries (delivery_id, order_id, delivery_date, delivered_at, created_at, delivery_method)
          VALUES (?, ?, ?, NULL, CURRENT_TIMESTAMP, ?)
        `;
        await db.run(
          sqlInsert,
          item.delivery_id,
          item.order_id,
          item.delivery_date,
          item.delivery_method
        );
        console.log(`Delivery item ${item.delivery_id} inserted successfully.`);
      }
    }
  } catch (error) {
    console.error("Error creating delivery items:", error);
    throw error;
  } finally {
    await db.close();
  }
}
