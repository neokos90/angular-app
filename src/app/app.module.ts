import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';

import { HttpClientModule }   from '@angular/common/http';


import { FilterPipe } from './filter.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteEmojisComponent } from './favorite-emojis/favorite-emojis.component';
import { AllEmojisComponent } from './all-emojis/all-emojis.component';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';



const appRoutes: Routes = [
  { path: '', component: AllEmojisComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FavoriteEmojisComponent,
    AllEmojisComponent

  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule, FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    //  StorageServiceModule
  ],
  providers: [HttpService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
