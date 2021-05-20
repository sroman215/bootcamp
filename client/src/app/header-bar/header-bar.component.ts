import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adder } from "../../../../api/Models/Adder";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  navToAngular() {

  }

  navToGame() { 
    
  }

  async submit() {
    try {
      const reqObj: Adder = {num1: this.num1, num2: this.num2}
      this.result = <number>await this.http.post('/api/calculator', reqObj).toPromise(); 
    } catch (err) {
      console.log(err.error)
    }
  }
}
