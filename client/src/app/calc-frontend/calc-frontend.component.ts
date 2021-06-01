import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-frontend',
  templateUrl: './calc-frontend.component.html',
  styleUrls: ['./calc-frontend.component.css']
})
export class CalcFrontendComponent implements OnInit {

  public msCount: number = 0

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.msCount += 1, 1)
  }

  get formattedSecs() {
    return Math.floor(this.msCount / 1000)
  }

  get formattedMins() {
    return Math.floor(this.msCount / (1000*60))
  }

}
