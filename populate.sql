-- Populate the 'stock' table
INSERT INTO stock (stock_id, description, price, quantity_in_stock, last_ordered_date, created_at, updated_at) VALUES
(1, 'Product A', 20.00, 100, '2023-11-01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Product B', 15.50, 200, '2023-10-20', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Populate the 'roles' table
INSERT INTO roles (role_id, role_name, description, created_at) VALUES
(1, 'Admin', 'Administrator Role', CURRENT_TIMESTAMP),
(2, 'Sales', 'Salesperson Role', CURRENT_TIMESTAMP);

-- Populate the 'users' table
INSERT INTO users (id, username, name, surname, password, annual_leave_allowance, role_id, salary, created_at) VALUES
(1, 'johnsmith', 'John', 'Smith', 'hashedpassword1', 15, 1, 55000, CURRENT_TIMESTAMP),
(2, 'janedoe', 'Jane', 'Doe', 'hashedpassword2', 12, 2, 45000, CURRENT_TIMESTAMP);

-- Populate the 'customers' table with individual people
INSERT INTO customers (customer_id, name, address, email, phone_number, balance, created_at) VALUES
(1, 'Alice Johnson', '123 Maple Street', 'alice.johnson@email.com', '555-0101', 0.00, CURRENT_TIMESTAMP),
(2, 'Bob Williams', '456 Oak Avenue', 'bob.williams@email.com', '555-0202', 100.00, CURRENT_TIMESTAMP);

-- Populate the 'orders' table
INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at) VALUES
(1, 1, 1, 'Completed', 200.00, CURRENT_TIMESTAMP),
(2, 2, 2, 'Processing', 310.00, CURRENT_TIMESTAMP);

-- Populate the 'order_items' table
INSERT INTO order_items (order_item_id, order_id, stock_id, quantity, unit_price, line_total, created_at, updated_at) VALUES
(1, 1, 1, 5, 20.00, 100.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 2, 2, 10, 15.50, 155.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Populate the 'deliveries' table
INSERT INTO deliveries (delivery_id, order_id, delivery_date, delivered_at, created_at) VALUES
(1, 1, '2023-11-10', '2023-11-11', CURRENT_TIMESTAMP),
(2, 2, '2023-11-15', NULL, CURRENT_TIMESTAMP);
