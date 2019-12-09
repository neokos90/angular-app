import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';


import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite-emojis',
  templateUrl: './favorite-emojis.component.html',
  styleUrls: ['./favorite-emojis.component.css']
})

export class FavoriteEmojisComponent implements OnInit {
  
  emojis: any[] = [];
  searchText: string;
  faTimes = faTimes;
  page: any;

  constructor(private _httpService: HttpService,
    private route: ActivatedRoute) { 
      this.route.data.subscribe(data => {this.page = data}) 
    }

  ngOnInit() {   
    this.emojis = this._httpService.getDataFromAPI();
  }

}
