import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService{

  constructor() { }
  words: Iword [] = [{
    word:'1',
    mean:'mot',
  },{
    word:'3',
    mean:'ba',
  },{
    word:'2',
    mean:'hai'
  }]

  getAll(){
   return this.words;
  }
}
