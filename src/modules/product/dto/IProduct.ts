import { Condition, Status } from "@prisma/client"
import { IImage } from "./IImage";

export interface IProduct{
    
  description: string;
  price:       string;
  discount:    string;
  quantity:    number;
  detail:      string;
  condition:   Condition;
  status:      Status;
  id_user:     string
   

}