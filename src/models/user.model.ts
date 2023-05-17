import { Address } from "@models/address.model";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
