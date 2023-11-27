-- SQLite3 Database Creation Script

-- Create 'product' table
CREATE TABLE IF NOT EXISTS product (
  product_id INTEGER PRIMARY KEY,
  description VARCHAR(255),
  price DECIMAL(10, 2),
  quantity_in_stock INTEGER,
  last_ordered_date DATE,
  category VARCHAR(255),
  manufacturer VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

-- Create 'users' table
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
);

-- Create 'customers' table
CREATE TABLE IF NOT EXISTS customers (
  customer_id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(255),
  email VARCHAR(100) UNIQUE,
  phone_number VARCHAR(15),
  balance DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'orders' table
CREATE TABLE IF NOT EXISTS orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(customer_id),
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(20),
  total DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'order_items' table
CREATE TABLE IF NOT EXISTS order_items (
  order_item_id INTEGER PRIMARY KEY,
  order_id INTEGER REFERENCES orders(order_id),
  product_id INTEGER REFERENCES product(product_id),
  quantity INTEGER,
  unit_price DECIMAL(10, 2),
  line_total DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'deliveries' table
CREATE TABLE IF NOT EXISTS deliveries (
  delivery_id INTEGER PRIMARY KEY,
  order_id INTEGER REFERENCES orders(order_id),
  delivery_date DATE,
  delivered_at TIMESTAMP,
  delivery_method VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'services' table
CREATE TABLE IF NOT EXISTS services (
  service_id INTEGER PRIMARY KEY,
  service_name VARCHAR(255),
  duration_months INTEGER,
  monthly_cost DECIMAL(10, 2),
  customer_id INTEGER REFERENCES customers(customer_id),
  order_id INTEGER REFERENCES orders(order_id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create 'company_directory' table
CREATE TABLE IF NOT EXISTS company_directory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_company VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  address VARCHAR(255),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

-- Create 'days' table
CREATE TABLE IF NOT EXISTS days (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company_id INTEGER REFERENCES company_directory(id),
  day_of_week VARCHAR(10),
  opening_hour TIME NULL,
  closing_hour TIME NULL,
  status VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
