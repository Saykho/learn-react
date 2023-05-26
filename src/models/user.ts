import { Address } from "@models/address";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
