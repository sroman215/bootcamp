import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Adder } from '../../../../api/Models/Adder';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async submit() {
    try {
      const reqObj: Adder = {num1: this.num1, num2: this.num2}
      const result = <any>await this.http.post('/api/calculator', reqObj).toPromise(); 
      this.result = result.sum
    } catch (err) {
      console.log(err.error)
    }
  }
}
