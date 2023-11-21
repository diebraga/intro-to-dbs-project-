const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  }
);

// Create 'roles' and 'users' tables
db.serialize(() => {
  // Create 'order_items' table
  db.run(
    `
   CREATE TABLE IF NOT EXISTS order_items (
     order_item_id INTEGER PRIMARY KEY,
     order_id INTEGER,
     stock_id INTEGER,
     quantity INTEGER,
     unit_price DECIMAL(10, 2),
     line_total DECIMAL(10, 2),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP,
     FOREIGN KEY(order_id) REFERENCES orders(order_id),
     FOREIGN KEY(stock_id) REFERENCES stock(stock_id)
   )
 `,
    (err) => {
      if (err) {
        console.error("Error creating order_items table", err.message);
        return;
      }
      console.log('Created the "order_items" table.');

      // Create 'users' table with address
      db.run(
        `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        surname TEXT UNIQUE,
        password TEXT,
        address VARCHAR,  
        annual_leave_allowance INTEGER,
        role VARCHAR,
        salary INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `,
        (err) => {
          if (err) {
            console.error("Error creating users table", err.message);
            return;
          }
          console.log('Created the "users".');
        }
      );

      // Create 'customers' table
      db.run(
        `
      CREATE TABLE IF NOT EXISTS customers (
        customer_id INTEGER PRIMARY KEY,
        name VARCHAR(100),
        address VARCHAR(255),
        email VARCHAR(100) UNIQUE,
        phone_number VARCHAR(15),
        balance DECIMAL(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )  
    `,
        (err) => {
          if (err) {
            console.error("Error creating customers table", err.message);
            return;
          }
          console.log('Created the "customers" table.');
        }
      );

      // Create 'stock' table
      db.run(
        `
      CREATE TABLE IF NOT EXISTS stock (
        stock_id INTEGER PRIMARY KEY,
        description VARCHAR(255),
        price DECIMAL(10, 2),
        quantity_in_stock INTEGER,
        last_ordered_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP
      )
    `,
        (err) => {
          if (err) {
            console.error("Error creating stock table", err.message);
            return;
          }
          console.log('Created the "stock" table.');
        }
      );

      // Create 'orders' table
      db.run(
        `
      CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY,
        customer_id INTEGER,
        user_id INTEGER,
        status VARCHAR(20),
        total DECIMAL(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(customer_id) REFERENCES customers(customer_id),
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
   `,
        (err) => {
          if (err) {
            console.error("Error creating orders table", err.message);
            return;
          }
          console.log('Created the "orders" table.');
        }
      );
      // Create 'deliveries' table
      db.run(
        `
        CREATE TABLE IF NOT EXISTS deliveries (
          delivery_id INTEGER PRIMARY KEY,
          order_id INTEGER,
          delivery_date DATE,
          delivered_at TIMESTAMP,
          delivery_method VARCHAR,  
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(order_id) REFERENCES orders(order_id)
        )
        `,
        (err) => {
          if (err) {
            console.error("Error creating deliveries table", err.message);
            return;
          }
          console.log('Created the "deliveries" table.');
        }
      );
    }
  );
});

module.exports = db;
