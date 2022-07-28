import { Purchase } from './purchases';

export type Customer = {
  id: string;
  authUserId: string;
  purchases?: Purchase[];
  createdAt: Date;
  updatedAt: Date;
};
