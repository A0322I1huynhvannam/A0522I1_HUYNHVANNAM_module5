import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Iword} from "../../model/iword";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  constructor(private dictionaryService : DictionaryService) { }
  words : Iword[];


  ngOnInit(): void {
   this.getAll();
  }
  getAll(){
    this.words = this.dictionaryService.getAll();
  }

}
