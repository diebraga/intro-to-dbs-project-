const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create 'roles' and 'users' tables
db.serialize(() => {
  // Create 'roles' table
  db.run(`
    CREATE TABLE IF NOT EXISTS roles (
      role_id INTEGER PRIMARY KEY,
      role_name TEXT,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating roles table', err.message);
      return;
    }
    console.log('Created the "roles" table.');

    // Create 'users' table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        name TEXT,
        password TEXT,
        annual_leave_allowance INTEGER,
        role_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(role_id) REFERENCES roles(role_id)
      )
    `, (err) => {
      if (err) {
        console.error('Error creating users table', err.message);
        return;
      }
      console.log('Created the "users" table.');
    });
  });
});

module.exports = db;
