import {RentType} from "./rentType";
import {ServiceType} from "./serviceType";
import {DivService} from "./divService";

export interface ServiceFurama {
  id?: number;
  name?:string;
  image?:string;
  area?:number;
  cost?: number;
  peopleMax?: number;
  standardRoom?: string;
  descriptionOtherConvenience?:string;
  areaPool?: number;
  numberOfFloors?: number;
  rentType?: RentType;
  serviceType?:ServiceType;
  serviceDiv?:DivService;

}
