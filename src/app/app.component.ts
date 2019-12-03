import { Component, OnInit } from '@angular/core';

import { HttpService} from './http.service';
import {User} from './user';

import {Menu} from './menu';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  template: `<ul>
  <li>
  <p>Имя пользователя: {{emojis}}</p>
  <p>Возраст пользователя: {{emojis}}</p>
  </li>
</ul>`,
  providers: [HttpService]
})

export class AppComponent implements OnInit { 
   
  emojis: User;

  constructor(private httpService: HttpService){}
    
  ngOnInit(){
        
      this.httpService.getData().subscribe((data:User) => {this.emojis = data;
        console.log(this.emojis)});
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
