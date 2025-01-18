export interface regResponse {
  data?: string;
  message?: string;
  success?: boolean;
  msgError?: string;
}
export interface regBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
}
export interface FBUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
}
export interface logBody {
  email: string;
  password: string;
}
export interface loginRes {
  message?: string;
  access_token?: string;
  refresh_token?: string;
  user?: User;
  success?: boolean;
}
export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  userName?: string | null;
  email?: string | null;
  password?: string;
  photoUrl?: string;
  phone?: string;
  address?: string;
  role?: string;
  status?: string;
  confirmEmail?: boolean;
  gender?: string;
  forgetCode?: null;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  __v?: number;
}
