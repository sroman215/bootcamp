import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { AngularSetupComponent } from './angular-setup/angular-setup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from '@angular/material/button';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcFrontendComponent } from './calc-frontend/calc-frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    AngularSetupComponent,
    TicTacToeComponent,
    CalculatorComponent,
    CalcFrontendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
