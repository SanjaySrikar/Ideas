import { user } from "./user";

export interface role {
  id: number;
  name: string;
  users ?: user[];
}
