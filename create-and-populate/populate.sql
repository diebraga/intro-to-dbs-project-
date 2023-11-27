-- create users 
INSERT INTO users (username, name, surname, password, annual_leave_allowance, salary, role, address, created_at)
VALUES 
  ('diebraga', 'Diego', 'Braga', '[hashed_password_1]', 20, 90000, 'ceo', 'Road 42 High Street', '2021-01-10'),
  ('anasilva', 'Ana', 'Silva', '[hashed_password_2]', 20, 50000, 'Administrator', '238 Chuo Dori', '2021-01-10'),
  ('luizcosta', 'Luiz', 'Costa', '[hashed_password_3]', 20, 40000, 'Office Worker', 'Road EH1 1TG Scotland, UK', '2015-04-15');

--- create customers
INSERT INTO customers (customer_id, name, address, email, phone_number)
VALUES
  (1, 'John Doe', '123 Maple Street', 'john.doe@example.com', '555-1234'),
  (2, 'Jane Smith', '456 Elm Street Road', 'jane.smith@example.com', '555-5678'),
  (3, 'Alice Johnson', '789 Oak Avenue Road', 'alice.johnson@example.com', '555-9012');

--- create office
INSERT INTO company_directory (name_company, phone_number, address, email)
VALUES ('Introduction to dbs Company', '01-2345678', '123 Castle Street, Exampville', 'intro-to-dbs@company.com');

--- create days week 
INSERT INTO days (company_id, day_of_week, opening_hour, closing_hour)
VALUES
  (1, 'Monday', '08:00', '17:00'),
  (1, 'Tuesday', '08:00', '17:00'),
  (1, 'Wednesday', '08:00', '17:00'),
  (1, 'Thursday', '08:00', '17:00'),
  (1, 'Friday', '08:00', '17:00'),
  (1, 'Saturday', '08:00', '17:00'),
  (1, 'Sunday', '08:00', '17:00');

-- create orders
INSERT INTO orders (order_id, customer_id, user_id, status, total, created_at)
VALUES
  (1, 1, 1, 'Processing', 100.0, '2023-11-26T13:33:30.221Z'),
  (2, 2, 2, 'Processing', 150.0, '2023-11-26T13:33:30.221Z'),
  (3, 3, 3, 'Processing', 200.0, '2013-04-25T00:32:08.753Z');

-- create products
INSERT INTO product (product_id, description, price, quantity_in_stock, last_ordered_date, category, manufacturer, created_at)
VALUES
  (1, 'Basic Lawnmower', 299.99, 40, '2023-01-01', 'Lawnmowers', 'GreenCuts', CURRENT_TIMESTAMP),
  (2, 'Self-Propelled Lawnmower', 559.5, 30, '2023-01-15', 'Lawnmowers', 'LawnMaster', CURRENT_TIMESTAMP),
  (3, 'Electric Lawnmower', 425.0, 50, '2023-01-10', 'Lawnmowers', 'EcoMow', CURRENT_TIMESTAMP);

-- create delivery items
INSERT INTO deliveries (delivery_id, order_id, delivery_date, delivered_at, created_at, delivery_method)
VALUES
  (1, 1, '2023-02-01', NULL, CURRENT_TIMESTAMP, 'Standard'),
  (2, 2, '2023-02-02', NULL, CURRENT_TIMESTAMP, 'Express'),
  (3, 3, '2023-02-03', NULL, CURRENT_TIMESTAMP, 'Overnight');

-- create order items
INSERT INTO order_items (order_item_id, order_id, product_id, quantity, unit_price, line_total, created_at)
VALUES
  (1, 1, 1, 10, 20.0, 200.0, CURRENT_TIMESTAMP),
  (2, 1, 2, 5, 30.0, 150.0, CURRENT_TIMESTAMP),
  (3, 2, 1, 7, 20.0, 140.0, CURRENT_TIMESTAMP);

-- create services
INSERT INTO services (service_name, duration_months, monthly_cost)
VALUES
  ('Lawnmower Service Agreement', 6, 25),
  ('Mowing by Staff for Summer', 4, 30),
  ('Lawnmower Rental', 5, 20),
  ('Garden Equipment Maintenance', 2, 15);
