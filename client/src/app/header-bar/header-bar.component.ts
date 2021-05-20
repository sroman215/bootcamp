import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adder } from "../../../../api/Models/Adder";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navToAngular() {

  }

  navToGame() { 
    
  }
}
