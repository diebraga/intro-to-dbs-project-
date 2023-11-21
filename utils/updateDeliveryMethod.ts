import { openDb } from "@/database/openDb";

type UpdateDeliveryMethodParams = {
  delivery_id: number;
  new_method: string;
};

export async function updateDeliveryMethod(params: UpdateDeliveryMethodParams[], setAllToCourier: boolean): Promise<void> {
  const db = await openDb();

  try {
    if (setAllToCourier) {
      // Update all delivery methods to 'Courier'
      const sqlUpdateAll = `UPDATE deliveries SET delivery_method = 'Courier'`;
      await db.run(sqlUpdateAll);
      console.log(`All delivery methods updated to Courier.`);
    } else {
      // Update based on provided params
      for (const param of params) {
        const sqlUpdate = `
          UPDATE deliveries
          SET delivery_method = ?
          WHERE delivery_id = ?
        `;
        await db.run(sqlUpdate, param.new_method, param.delivery_id);
        console.log(`Delivery method for item ${param.delivery_id} updated to ${param.new_method}.`);
      }
    }
  } catch (error) {
    console.error("Error updating delivery methods:", error);
    throw error;
  } finally {
    await db.close();
  }
}


