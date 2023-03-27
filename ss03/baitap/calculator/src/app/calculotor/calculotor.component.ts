import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculotor',
  templateUrl: './calculotor.component.html',
  styleUrls: ['./calculotor.component.css']
})
export class CalculotorComponent implements OnInit {
  firstValue: number;
  display: string = '';
  action: string;
  constructor() { }
  ngOnInit(): void {
  }
  dis(val: string){
    this.display  += val;
  }
  oper(action){
    this.action = action;
    this.firstValue = parseFloat(this.display);
    this.display ='';
  }
  calculate(){
    const a = this.firstValue;
    const b = parseFloat(this.display);
    let result: number;
    if (this.action === '*'){
      result = a*b;
    }
    if (this.action === '/'){
      result = a/b;
    }
    if (this.action === '+'){
      result = a+b;
    }
    if (this.action === '-'){
      result = a-b;
    }
    this.firstValue = result;
    this.display = result.toString();
  }
  clr(){
    this.firstValue = 0;
    this.display = ' ';
  }
}
