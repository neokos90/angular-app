import { Component, OnInit } from '@angular/core';

import { HttpService} from './http.service';

import {Emoji} from './emoji';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit { 
   
  response: any;
  emojis: Emoji[] = [];
  emoji: Emoji;
  name: string;
  age: number;

  menuItems = ['Все', 'Любимые', 'Удалённые'];
 
  constructor(private httpService: HttpService){}
    
  ngOnInit(){
        
      this.httpService.getData().subscribe((data) => {this.response = data;
        console.log(this.response);
        
        for(let keyName in this.response){

          console.log(keyName);
          console.log(this.response[keyName]);

          this.emoji = {
            "name": String(keyName),
            "url": String(this.response[keyName]),
            "status": 1
          };

          this.emojis.push(this.emoji);

        }    
      // console.log(this.emojis);
    }
        );


  }



}


// export class AppComponent {
//   title = 'Tour of Menues';
//   menuList =   [
//     new Menu(0, 'Все'),
//     new Menu(1, 'Любимые'),
//     new Menu(2, 'Удалённые'),
//   ];
//   myMenu = this.menuList[0];
// }
