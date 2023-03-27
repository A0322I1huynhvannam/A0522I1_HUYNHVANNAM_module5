import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor() {
  }
  words : Iword[]=[
    {
  word:'1',
    mean:'mot'
  },{
    word:'2',
    mean:'hai',
  }];

  getAll(){
    return this.words;
  }

  detail(mean: string) {
    return this.words.find(item => item.word == mean)[0];
  }
}


