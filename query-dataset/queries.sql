-- Set all users' annual leave allowance to 29
UPDATE users SET annual_leave_allowance = 29;

-- Update orders with IDs 1, 2, and 3 to 'Shipped' status
UPDATE orders
SET status = 'Shipped'
WHERE order_id IN (1, 2, 3);
