import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Emoji} from './emoji';
  
@Injectable()
export class HttpService{
  
    private response: any;
    public emojis: any[] = [];
    private emoji: {};
    // public emojis: Emoji[] = [];
    // private emoji: Emoji;

    constructor(private http: HttpClient){ }
      
    getDataFromAPI(){
        this.http.get('https://api.github.com/emojis').subscribe((data) => 
        {this.response = data;
                
                for(let keyName in this.response){      
        
                  this.emoji = {
                    "name": String(keyName),
                    "url": String(this.response[keyName]),
                    "status": 1
                  };
        
                  this.emojis.push(this.emoji);
        
                }    
            });
            console.log('this.emojis',this.emojis);
            return  this.emojis;
    }

    getData(){
        console.log('From getEmojis',this.emojis);
        return this.emojis;

    }
    


}