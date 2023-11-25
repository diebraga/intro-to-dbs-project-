import { openDb } from "@/database/openDb";

type ProductItem = {
  product_id: number;
  description: string;
  price: number;
  quantity_in_stock: number;
  last_ordered_date: string;
  category: string;
  manufacturer: string;
};

export async function createProducts(): Promise<void> {
  const db = await openDb();

  try {
    const productItems: ProductItem[] = [
      {
        product_id: 1,
        description: "Basic Lawnmower",
        price: 299.99,
        quantity_in_stock: 40,
        last_ordered_date: "2023-01-01",
        category: "Lawnmowers",
        manufacturer: "GreenCuts",
      },
      {
        product_id: 2,
        description: "Self-Propelled Lawnmower",
        price: 559.5,
        quantity_in_stock: 30,
        last_ordered_date: "2023-01-15",
        category: "Lawnmowers",
        manufacturer: "LawnMaster",
      },
      {
        product_id: 3,
        description: "Electric Lawnmower",
        price: 425.0,
        quantity_in_stock: 50,
        last_ordered_date: "2023-01-10",
        category: "Lawnmowers",
        manufacturer: "EcoMow",
      },
    ];

    for (const item of productItems) {
      // Check if the item already exists
      const sqlCheck = `SELECT COUNT(*) as count FROM product WHERE product_id = ?`;
      const { count } = await db.get(sqlCheck, item.product_id);

      if (count === 0) {
        // Item does not exist, so insert it
        const sqlInsert = `
          INSERT INTO product (product_id, description, price, quantity_in_stock, last_ordered_date, category, manufacturer, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `;
        await db.run(
          sqlInsert,
          item.product_id,
          item.description,
          item.price,
          item.quantity_in_stock,
          item.last_ordered_date,
          item.category,
          item.manufacturer
        );
        console.log(`Product item ${item.product_id} inserted successfully.`);
      }
    }
  } catch (error) {
    console.error("Error creating product items:", error);
    throw error;
  } finally {
    await db.close();
  }
}
