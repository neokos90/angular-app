import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { faAsterisk, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deleted-emojis',
  templateUrl: './deleted-emojis.component.html',
  styleUrls: ['./deleted-emojis.component.css']
})
export class DeletedEmojisComponent implements OnInit {

  emojis: any[] = [];
  searchText: string;
  faTrashRestoreAlt = faTrashRestoreAlt;
  faAsterisk = faAsterisk;
  page: any;

  constructor(private _httpService: HttpService,
    private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.page = data });
  }


  ngOnInit() {
    this.emojis = this._httpService.getDataFromAPI();
  }

  restoreToAll(name: string) {

    this.emojis.forEach((item) => {
      if(item.name == name){
        item.status = 1;
      }
    });

    return this.emojis;
  }

  addToFavorite(name: string) {

    this.emojis.forEach((item) => {
      if(item.name == name){
        item.status = 2;
      }
    });
    
    return this.emojis;
  }
}
