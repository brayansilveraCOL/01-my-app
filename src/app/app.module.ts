import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {headerComponent} from "./Components/header/header.component";
import {bodyComponent} from "./Components/body/body.component";
import { FooterComponent } from './Components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    bodyComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
