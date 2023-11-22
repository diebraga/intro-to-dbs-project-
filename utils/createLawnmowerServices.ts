import { openDb } from "@/database/openDb";
import { Database } from "sqlite3";

type Service = {
  name: string;
  duration: number;
  cost: number;
};

export async function createLawnmowerServices() {
  const db = await openDb();

  const insertSql = `
    INSERT INTO services (service_name, duration_months, monthly_cost)
    VALUES (?, ?, ?)
  `;

  const services: Service[] = [
    { name: "Lawnmower Service Agreement", duration: 6, cost: 25 },
    { name: "Mowing by Staff for Summer", duration: 4, cost: 30 },
    { name: "Lawnmower Rental", duration: 5, cost: 20 },
    { name: "Garden Equipment Maintenance", duration: 2, cost: 15 },
  ];

  services.forEach((service) => {
    db.run(
      insertSql,
      [service.name, service.duration, service.cost],
      (err: any) => {
        if (err) {
          console.error(`Error inserting ${service.name}:`, err.message);
        } else {
          console.log(`Inserted service: ${service.name}`);
        }
      }
    );
  });
}
