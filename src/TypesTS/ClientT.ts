import {VisitT} from "./VisitT";
export interface ClientT {
  name: string;
  phone: string;
  email: string;
  adress: string;
  gender: string;
  age: number;
  visits : VisitT[];
}
