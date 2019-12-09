import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { HttpClientModule }   from '@angular/common/http';

import { FilterPipe } from './filter.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteEmojisComponent } from './favorite-emojis/favorite-emojis.component';
import { AllEmojisComponent } from './all-emojis/all-emojis.component';
import { DeletedEmojisComponent } from './deleted-emojis/deleted-emojis.component';

import { HttpService } from './http.service';

const appRoutes: Routes = [
  { path: '', 
      data: {
        title: 'Все'
      },
      component: AllEmojisComponent 
    },
  { path: 'favorite', 
      data: {
        title: 'Любимые'
      },
      component: FavoriteEmojisComponent,

    },
  { path: 'delete', 
      data: {
        title: 'Удалённые'
      },
      component: DeletedEmojisComponent 
    }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FavoriteEmojisComponent,
    AllEmojisComponent,
    DeletedEmojisComponent

  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule, FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
