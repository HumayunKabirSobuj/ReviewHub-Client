export type IUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string; // Fixed role value
  profileUrl: string;
  iat: number; // Issued at timestamp
  exp: number; // Expiry timestamp
};
