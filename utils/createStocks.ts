import { openDb } from '@/database/openDb';

type StockItem = {
  stock_id: number;
  description: string;
  price: number;
  quantity_in_stock: number;
  last_ordered_date: string; 
};

export async function createStocks(): Promise<void> {
  const db = await openDb();

  try {
    const stockItems: StockItem[] = [
      { stock_id: 1, description: 'Item 1', price: 10.99, quantity_in_stock: 100, last_ordered_date: '2023-01-01' },
      { stock_id: 2, description: 'Item 2', price: 15.50, quantity_in_stock: 50, last_ordered_date: '2023-01-02' },
      { stock_id: 3, description: 'Item 3', price: 20.00, quantity_in_stock: 75, last_ordered_date: '2023-01-03' }
    ];

    for (const item of stockItems) {
      // Check if the item already exists
      const sqlCheck = `SELECT COUNT(*) as count FROM stock WHERE stock_id = ?`;
      const { count } = (await db.get(sqlCheck, item.stock_id));

      if (count === 0) {
        // Item does not exist, so insert it
        const sqlInsert = `
          INSERT INTO stock (stock_id, description, price, quantity_in_stock, last_ordered_date, created_at)
          VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `;
        await db.run(sqlInsert, item.stock_id, item.description, item.price, item.quantity_in_stock, item.last_ordered_date);
        console.log(`Stock item ${item.stock_id} inserted successfully.`);
      }
    }
  } catch (error) {
    console.error('Error creating stock items:', error);
    throw error;
  } finally {
    await db.close();
  }
}
