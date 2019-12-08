import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service'; 

import {Emoji} from './emoji';

import { faTimes, faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalStorageService]
})

export class AppComponent implements OnInit { 
   
  emojis: Emoji[] = [];
  searchText: string;
  faTimes = faTimes;
  faAsterisk = faAsterisk;

  menuItems = [
    {
      id: 0,
      name: 'Удалённые'
    },
    {
      id: 1,
      name: 'Все'
    },
    {
      id: 2,
      name: 'Любимые'
    }];

    currentMenuItemName = this.menuItems[1].name;
    currentMenuItem = this.menuItems[1].id;
 
  constructor(private _localStorageService: LocalStorageService){}
    
  ngOnInit(){
    this.emojis = this._localStorageService.storeOnLocalStorage();
        // this.emojis = this._localStorageService.getData();
    localStorage.setItem('local_em', JSON.stringify(this.emojis));
  }
  
}