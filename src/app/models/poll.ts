import idea from "./idea";
import { user } from "./user";

export interface poll {
  id?: number;
  ideas : idea[];
  users : user[];
}
