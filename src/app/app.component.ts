import { Component } from '@angular/core';

import {Menu} from './menu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Tour of Menues';
  menuList =   [
    new Menu(0, 'Все'),
    new Menu(1, 'Любимые'),
    new Menu(2, 'Удалённые'),
  ];
  myMenu = this.menuList[0];
}
