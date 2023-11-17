import { Customer } from '@/@types';
import { openDb } from '@/database/openDb';
import { getAll } from './getAll';

export async function createCustomers() {
  const existingCustomers = await getAll("customers");
  
  const customerNames = existingCustomers.map(c => c.name);

  const newCustomers: Customer[] = [
    { customer_id: 1, name: 'John Doe', address: '123 Maple Street', email: 'john.doe@example.com', phone_number: '555-1234' },
    { customer_id: 2, name: 'Jane Smith', address: '456 Elm Street', email: 'jane.smith@example.com', phone_number: '555-5678' },
    { customer_id: 3, name: 'Alice Johnson', address: '789 Oak Avenue', email: 'alice.johnson@example.com', phone_number: '555-9012' }
  ];

  const customersToInsert = newCustomers.filter(customer => !customerNames.includes(customer.name));

  if (customersToInsert.length > 0) {
    const db = await openDb();

    try {
      for (const customer of customersToInsert) {
        const sql = `INSERT INTO customers (customer_id, name, address, email, phone_number) VALUES (?, ?, ?, ?, ?)`;
        const customers = await db.run(sql, customer.customer_id, customer.name, customer.address, customer.email, customer.phone_number);
        console.log(customers);
      }
    } catch (error) {
      console.error('Error creating customers:', error);
      throw error;
    } finally {
      await db.close();
    }
  } else {
    console.log('Customers already exist. No new customers were added.');
  }
}
