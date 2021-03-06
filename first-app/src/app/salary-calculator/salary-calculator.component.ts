import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salary-calculator-model'

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  //model : SalaryCalculatorModel = new SalaryCalculatorModel(); //creation
  
  /* 
  model : SalaryCalculatorModel;

  constructor(model : SalaryCalculatorModel) {
    this.model = model;
  } 
  */

  constructor(public model : SalaryCalculatorModel) {
    
  }   

  ngOnInit(): void {
  }

  onBtnCalculateClick(){
    this.model.calculate(); //usage
  }

}
