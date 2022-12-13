import idea from "./idea";

export interface user {
  id: number;
  username: string;
  fname: string;
  lname: string;
  email: string;
  phone_no: number;
  password: string;
  ideas ?: idea[];
};

