import { users } from '@/__mocks__';
import { openDb } from '@/database/openDb';
import bcrypt from 'bcryptjs';
import { getUserByUsername } from './getUserByUsername';

// CAN BE USED ONLY IF ROLES ALREADY EXIST
export async function createUserForEachRole(): Promise<void> {
  const db = await openDb();
  const saltRounds = 10; 

  try {
    const userAlreadyExist = await getUserByUsername(users[0].username)
    if (!userAlreadyExist) {
      const insertPromises = users.map(async (user) => {
        
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      const sql = `
        INSERT INTO users (username, name, surname, password, annual_leave_allowance, role_id)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await db.run(sql, [user.username, user.name, user.surname, hashedPassword, user.annualLeaveAllowance, user.roleId]);
      console.log(`User ${user.username} inserted successfully with password ${user.password}`);
    });

    // Wait for all user insertions to complete
    await Promise.all(insertPromises);    
  } else {
    throw new Error(`User with username '${users[0].username}' already exists.`);
  }
  } catch (error: any) {
    console.error(error.message);
  } finally {
    await db.close();
  }
}
