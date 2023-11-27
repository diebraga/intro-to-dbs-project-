-- Set all users' annual leave allowance to 29
UPDATE users SET annual_leave_allowance = 29;

-- Update orders with IDs 1, 2, and 3 to 'Shipped' status
UPDATE orders
SET status = 'Shipped'
WHERE order_id IN (1, 2, 3);

-- Delete orders that are older than 6 months from the current date
DELETE FROM orders
WHERE created_at < DATE('now', '-6 months');

-- Sort usersby highest salary
SELECT name, surname, role AS position, salary
FROM users
ORDER BY salary DESC;

-- Add item to each table
NSERT INTO product ( description, price, quantity_in_stock, last_ordered_date, category, manufacturer, created_at )
VALUES ( 'GasLawnmower', 500.00, 50, '2022-01-10', 'Lawnmowers', 'GasFacture',CURRENT_TIMESTAMP );

INSERT INTO users (username, name, surname, password, address, annual_leave_allowance, role, salary, created_at) VALUES ('sales_rep', 'Alice', 'Johnson', 'securePass123', '123 Greenway Blvd', 25, 'Sales Representative', 40000, CURRENT_TIMESTAMP);

INSERT INTO customers (name, address, email, phone_number, balance, created_at) VALUES ('Bob Smith', '789 Oak Lane', 'bob.smith@example.com', '555-9876', 0.00, CURRENT_TIMESTAMP);

INSERT INTO deliveries ( order_id, delivery_date, delivered_at,
delivery_method, created_at ) VALUES ( 4, '2022-02-03', NULL,
'Overnight', '2021-11-25 23:32:16' );

INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at) VALUES (4, 4, 3, 'Processing', 200.00, CURRENT_TIMESTAMP);

INSERT INTO order_items ( order_id, product_id, quantity, unit_price, line_total, created_at )
VALUES ( 4, 1, 7, 20, 140, '2023-11-2613:33:30' );

INSERT INTO services ( service_name, duration_months, monthly_cost, customer_id, order_id, created_at )
VALUES ( 'Lawnmower Rental', 2, 20, NULL, NULL, '2023-11-26 13:33:30' );

-- Not applicable company_directory table completed
-- INSERT INTO company_directory (name_company, phone_number, address, email, created_at) VALUES ('LawnCare HQ', '555-1122', '101 Garden Path', 'info@lawncarehq.com', CURRENT_TIMESTAMP);

-- Not applicable days table completed
-- INSERT INTO days (company_id, day_of_week, opening_hour, closing_hour, status, created_at) VALUES (1, 'Monday', '09:00', '18:00', 'Open', CURRENT_TIMESTAMP);

-- Delete one record for each table
DELETE FROM product WHERE product_id = 4;
DELETE FROM users WHERE id = 4;
DELETE FROM customers WHERE customer_id = 4;
DELETE FROM deliveries WHERE delivery_id = 4;
DELETE FROM orders WHERE order_id = 4;
DELETE FROM order_items WHERE order_item_id = 4;
DELETE FROM services WHERE service_id = 4;

-- Query users by least days off 
SELECT name, surname, annual_leave_allowance FROM users ORDER BY annual_leave_allowance ASC

-- Get count of products
SELECT COUNT(*) as count FROM product;

-- Adm to Office_Worker
UPDATE users SET role = 'Administrator' WHERE role = 'Office_Worker';
