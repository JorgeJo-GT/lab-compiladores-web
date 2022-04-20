import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { InputNumberModule } from "primeng/inputnumber";
import { StyleClassModule } from 'primeng/styleclass';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from "primeng/table";
import { FileUploadModule } from "primeng/fileupload";
import {InputTextareaModule} from 'primeng/inputtextarea';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputNumberModule,
    StyleClassModule,
    SkeletonModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
