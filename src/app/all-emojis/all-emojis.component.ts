import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

import { faTimes, faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-emojis',
  templateUrl: './all-emojis.component.html',
  styleUrls: ['./all-emojis.component.css']
})
export class AllEmojisComponent implements OnInit {

  emojis: any[] = [];
  searchText: string;
  faTimes = faTimes;
  faAsterisk = faAsterisk;
  page: any;
  state: boolean = false;

  constructor(private _httpService: HttpService,
    private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.page = data })
  }

  ngOnInit() {
    this.emojis = this._httpService.getDataFromAPI();
  }

  deleteFromFavorite(name: string) {
    console.log(name);
  }

  addToFavorite(name: string) {

    this.state = true;
  }

}
