import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ChildComponent } from './search.component';

import { HttpClientModule }   from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, ChildComponent

  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
