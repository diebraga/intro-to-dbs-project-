export default async function NewRecords() {
  // await deleteAllUsers()
  //   await createOrderItems()
  // const data = await createItemForEachTable();

  return (
    <>
      <pre className="text-lg pt-10">{/* <RefreshComponent /> */}</pre>

      <div className="text-xl text-blue-500">
        {/* -- Insert into 'product' */}
        INSERT INTO product ( description, price, quantity_in_stock,
        last_ordered_date, category, manufacturer, created_at ) <br /> VALUES ({" "}
        {"'Gas"}
        {"Lawnmower', 500.00, 50, '2022-01-10', 'Lawnmowers', 'GasFacture',"}
        CURRENT_TIMESTAMP );
        <br />
        <br /> {/* -- Insert into 'users' */}
        INSERT INTO users (username, name, surname, password, address,
        annual_leave_allowance, role, salary, created_at){" "}
        {
          "VALUES ('sales_rep', 'Alice', 'Johnson', 'securePass123', '123 Greenway Blvd', 25, 'Sales Representative', 40000, CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'customers' */}
        INSERT INTO customers (name, address, email, phone_number, balance,
        created_at){" "}
        {
          "VALUES ('Bob Smith', '789 Oak Lane', 'bob.smith@example.com', '555-9876', 0.00, CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'deliveries' */}
        INSERT INTO deliveries ( order_id, delivery_date, delivered_at,
        <br />
        delivery_method, created_at ) VALUES ( {"4, '2022-02-03', NULL,"}
        <br />
        {"'Overnight', '2021-11-25 23:32:16'"} );
        <br />
        <br /> {/* -- Insert into 'orders' */}
        INSERT INTO orders (order_id, customer_id, user_id, status, total,
        created_at){" "}
        {"VALUES (4, 4, 3, 'Processing', 200.00, CURRENT_TIMESTAMP);"}
        <br />
        <br /> {/* -- Insert into 'order_items' */}
        INSERT INTO order_items ( order_id, product_id, quantity, unit_price,
        line_total, created_at )<br /> VALUES ( 4, 1, 7, 20, 140,
        {" '2023-11-26"}
        {"13:33:30'"} );
        <br />
        <br /> {/* -- Insert into 'services' */}
        INSERT INTO services ( service_name, duration_months, monthly_cost,
        customer_id, order_id, created_at )<br /> VALUES ({" "}
        {"'Lawnmower Rental'"}, 2, 20, NULL, NULL, {"'2023-11-26 13:33:30'"} );
        <br />
        <br /> {/* -- Insert into 'company_directory' */}
        <div className="text-white">
          Not applicable company_directory table completed
        </div>
        INSERT INTO company_directory (name_company, phone_number, address,
        email, created_at){" "}
        {
          "VALUES ('LawnCare HQ', '555-1122', '101 Garden Path', 'info@lawncarehq.com', CURRENT_TIMESTAMP);"
        }
        <br />
        <br /> {/* -- Insert into 'days' */}
        <div className="text-white">Not applicable days table completed</div>
        INSERT INTO days (company_id, day_of_week, opening_hour, closing_hour,
        status, created_at){" "}
        {"VALUES (1, 'Monday', '09:00', '18:00', 'Open', CURRENT_TIMESTAMP);"}
        <br />
      </div>
    </>
  );
}
