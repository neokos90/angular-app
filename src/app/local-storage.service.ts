import { Inject, Injectable  } from '@angular/core';
import { HttpService } from './http.service';


import { LocalStorage } from '@ngx-pwa/local-storage';

// import { LOCAL_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

import { Emoji } from './emoji';

// const STORAGE_KEY = 'local_emojis';

@Injectable()
export class LocalStorageService {

  currentEmojisList: any[] = [];
  constructor(private _httpService: HttpService,
    private localStorage: LocalStorage 
    // @Inject(LOCAL_STORAGE) private storage: StorageService
    ) {}

  public storeOnLocalStorage(){
 
    this.currentEmojisList = this._httpService.getDataFromAPI();

    console.log('currentEmojisList: ', this.currentEmojisList);
    console.log('count', this.currentEmojisList.length);
    return this.currentEmojisList;
    
}

ngOnInit(){
  this.localStorage.setItem('local', this.currentEmojisList).subscribe(() => {
    // Done
  }, () => {
    // Error
  });
}

getData(){
  
  // return localStorage.getItem('key');
  // return JSON.parse(this.storage.get(STORAGE_KEY));
};

}
