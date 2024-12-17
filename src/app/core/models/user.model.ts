export interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'CLIENT' | 'ADMIN';
  address?: string;
  phone?: string;
}