import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'search-comp',
    templateUrl: './search.component.html' 
})
export class SearchComponent { 

    @Input() currentMenuItemName: string;
    @Input() currentMenuItem: number;

    emojiName = '';
    onEnter(value: string) {this.emojiName = value;}


}