export type Role = {
    role_id: number,
    role_name: string,
    description: string,
    created_at: string
  }
  
export type User = {
    id: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    roleId: number;
    annualLeaveAllowance: number;
  };