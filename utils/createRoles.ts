import { openDb } from "@/database/openDb";

export async function createRoles() {
  const db = await openDb();

  // Create 'roles' table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS roles (
      role_id INTEGER PRIMARY KEY AUTOINCREMENT,
      role_name TEXT NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Insert roles into 'roles' table
  const roles = [
    { role_name: 'CEO', description: 'Chief Executive Officer' },
    { role_name: 'Manager', description: 'Sales Manager' },
    { role_name: 'Sales Representative', description: 'Responsible for selling lawnmowers' },
  ];

  try {
    await db.run('BEGIN TRANSACTION');

    const insertPromises = roles.map((role) => {
      return db.run(`
        INSERT INTO roles (role_name, description) VALUES (?, ?)
      `, [role.role_name, role.description])
      .then((result) => {
        console.log(`Role created: ${role.role_name} with ID ${result.lastID}`);
        return result;
      });
    });

    // Wait for all insert operations to complete
    await Promise.all(insertPromises);

    await db.run('COMMIT');
    console.log('All roles have been created successfully');
  } catch (error) {
    await db.run('ROLLBACK');
    console.error('Failed to create roles:', error);
  }

  // Close the database connection
  await db.close();
}
