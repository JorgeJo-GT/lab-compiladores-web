import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InputNumberModule } from "primeng/inputnumber";
import {StyleClassModule} from 'primeng/styleclass';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputNumberModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
