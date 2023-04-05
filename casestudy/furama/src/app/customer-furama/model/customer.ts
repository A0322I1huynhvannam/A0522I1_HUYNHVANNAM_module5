import {CustomerType} from "./customer-type";

export interface Customer {
  id?: string;
  customerName?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  customerType?: CustomerType;
}
