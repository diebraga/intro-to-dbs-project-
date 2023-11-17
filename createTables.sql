-- Create the database
CREATE DATABASE TRADE_COMPANY;
USE TRADE_COMPANY;

-- Create table stock
CREATE TABLE stock (
  stock_id INT PRIMARY KEY,
  description VARCHAR(255),
  price DECIMAL(10,2),
  quantity_in_stock INT,
  last_ordered_date DATE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Create table roles
CREATE TABLE roles (
  role_id INT PRIMARY KEY,
  role_name VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP
);

-- Create table users
CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(255),
  name VARCHAR(255),
  surname VARCHAR(255),
  password VARCHAR(255),
  annual_leave_allowance INT,
  role_id INT,
  salary DECIMAL(10,2),
  created_at TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

-- Create table customers
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  email VARCHAR(255),
  phone_number VARCHAR(255),
  balance DECIMAL(10,2),
  created_at TIMESTAMP
);

-- Create table orders
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  user_id INT,
  status VARCHAR(255),
  total DECIMAL(10,2),
  created_at TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create table deliveries
CREATE TABLE deliveries (
  delivery_id INT PRIMARY KEY,
  order_id INT,
  delivery_date DATE,
  delivered_at TIMESTAMP,
  created_at TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- Create table order_items
CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY,
  order_id INT,
  stock_id INT,
  quantity INT,
  unit_price DECIMAL(10,2),
  line_total DECIMAL(10,2),
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (stock_id) REFERENCES stock(stock_id)
);
