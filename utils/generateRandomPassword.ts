import crypto from 'crypto';

export function generateRandomPassword(length: number) {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}