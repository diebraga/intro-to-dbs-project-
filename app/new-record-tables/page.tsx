export default async function NewRecords() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await createItemForEachTable();

  return (
    <>
      <pre className="text-lg pt-10">{/* <RefreshComponent /> */}</pre>

      <div className="text-xl text-blue-500">
        {/* -- Insert into 'product' */}
        INSERT INTO product (description, price, quantity_in_stock,
        last_ordered_date, category, manufacturer, created_at) <br />
        {
          "VALUES ('Electric Lawnmower', 299.99, 50, '2023-03-01', 'Lawnmowers', 'EcoMow', CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'users' */}
        INSERT INTO users (username, name, surname, password, address,
        annual_leave_allowance, role, salary, created_at)
        {
          "VALUES ('sales_rep', 'Alice', 'Johnson', 'securePass123', '123 Greenway Blvd', 25, 'Sales Representative', 40000, CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'customers' */}
        INSERT INTO customers (name, address, email, phone_number, balance,
        created_at)
        {
          "VALUES ('Bob Smith', '789 Oak Lane', 'bob.smith@example.com', '555-9876', 0.00, CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'deliveries' */}
        INSERT INTO deliveries (order_id, delivery_date, delivered_at,
        delivery_method, created_at)
        {
          "VALUES (1, '2023-04-01', NULL, 'Standard Shipping', CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'orders' */}
        INSERT INTO orders (customer_id, user_id, status, total, created_at)
        {"VALUES (1, 1, 'Confirmed', 299.99, CURRENT_TIMESTAMP);"}
        <br />
        <br /> {/* -- Insert into 'order_items' */}
        INSERT INTO order_items (order_id, product_id, quantity, unit_price,
        line_total, created_at) VALUES (1, 1, 1, 299.99, 299.99,
        CURRENT_TIMESTAMP);
        <br />
        <br /> {/* -- Insert into 'services' */}
        INSERT INTO services (service_name, duration_months, monthly_cost,
        customer_id, order_id, created_at)
        {
          "VALUES ('Regular Lawn Maintenance', 12, 50.00, 1, NULL, CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'company_directory' */}
        INSERT INTO company_directory (name_company, phone_number, address,
        email, created_at)
        {
          "VALUES ('LawnCare HQ', '555-1122', '101 Garden Path', 'info@lawncarehq.com', CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'days' */}
        Not applicable days table completed <br /> INSERT INTO days (company_id,
        day_of_week, opening_hour, closing_hour, status, created_at)
        {"VALUES (1, 'Monday', '09:00', '18:00', 'Open', CURRENT_TIMESTAMP);"}
        <br />
        <br /> {/* -- Insert into 'categories'  */}
        INSERT INTO categories (name)
        {"VALUES ('Gardening Equipment');"}
      </div>
    </>
  );
}
