import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    private response: any;
    public emojis: any[] = [];
    private emoji: {};

    constructor(private http: HttpClient){ }
      
    getDataFromAPI(){
      this.emojis = [];
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

            return  this.emojis;
    }
  
}