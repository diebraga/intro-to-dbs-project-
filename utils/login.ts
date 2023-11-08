import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getUserByUsername } from './getUserByUsername';

export async function login(username: string, password: string) {
  try {
    const user = await getUserByUsername(username);

    if (!user) {
        return { error: 'invalid-username-or-password' }
    }

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: 'invalid-username-or-password' }
    }

    // User is authenticated, create and return a JWT token
    const payload = { id: user.id, username: user.username };
    const secret = process.env.JWT_SECRET as string
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });

    return{ token: token }

  } catch (error) {
    console.error(error);
    return{ error: 'Internal Server Error' }
  }
}