
import type { NextApiRequest, NextApiResponse } from 'next';
import { login } from '../../utils/login';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const result = await login(username, password);

    if (result.error) {
      return res.status(401).json({ error: result.error });
    }

    // If login is successful, send the token to the client
    return res.status(200).json({ token: result.token });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
