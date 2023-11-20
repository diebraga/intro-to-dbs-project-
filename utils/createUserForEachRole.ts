import { openDb } from '@/database/openDb';
import bcrypt from 'bcryptjs';
import { getUserByUsername } from './getUserByUsername';
import { users } from '@/__mocks__';

export async function createUserForEachRole(): Promise<void> {
  const db = await openDb();
  const saltRounds = 10; 

  try {
    for (const user of users) {
      const userAlreadyExist = await getUserByUsername(user.username);

      if (!userAlreadyExist) {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const sql = `
          INSERT INTO users (username, name, surname, password, annual_leave_allowance, salary, role, address, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await db.run(sql, [user.username, user.name, user.surname, hashedPassword, user.annualLeaveAllowance, user.salary, user.role, user.address, user.created_at]);
        console.log(`User ${user.username} inserted successfully.`);
      } else {
        console.log(`User with username '${user.username}' already exists.`);
      }
    }
  } catch (error: any) {
    console.error(error.message);
  } finally {
    await db.close();
  }
}
