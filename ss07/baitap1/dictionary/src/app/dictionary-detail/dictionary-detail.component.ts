import { Component, OnInit } from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  words : Iword={} ;

  constructor(private dictionaryService : DictionaryService,
              private router : Router,
              private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const word = next.get('word');
      if (word != null) {
        this.words = this.dictionaryService.detail(word);
      }
    }, error => {

    },() =>{

    });
  }

  ngOnInit(): void {
  }

}
