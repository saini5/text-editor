import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { DemoService } from './services/demo.service';

import {NgxWigModule} from 'ngx-wig';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxWigModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
