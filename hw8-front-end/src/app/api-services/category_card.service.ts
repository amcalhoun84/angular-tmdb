import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryCardService {

  constructor(private http: HttpClient) { }

    getData(target_url: string, media: string) {
    var results: any = [];
    var multimg: any = [];
    const result = this.http.get<any>(target_url).subscribe((res) => {
        var result_list = res;
        result_list.forEach((element: any) => {
          var object = {
            id: element.id,
            image: element.poster_path,
            title: element.title,
            media: media
          };
          results.push(object);
        });
        var j = -1;
       for(var i = 0; i < results.length; i++) {
    
          if(i % 6 == 0) { 
            j++;
            multimg[j] = [];
            multimg[j].push(results[i])
          } else {
            multimg[j].push(results[i])
          }
        }       
          });
      return [results, multimg];
  
  }


  retrieveFromLocalStorage(localStorage: any) {
    var results: any = [];
    var multimg: any = [];
    var localLength = 0;
    Object.keys(localStorage).forEach((key: string) => {
      if(key.includes("-continue")) {
        localLength++;
        var element = JSON.parse(localStorage.getItem(key) || '{}');
        results.push({
            id: element['id'],
            image: element['poster_path'],
            title: element['title'],
            media: element['media_type']
          });
          var j = -1;
        for(var i = 0; i < localLength; i++) {
          if(i % 6 == 0) { 
            j++;
            multimg[j] = [];
            multimg[j].push(results[i])
          } else {
            multimg[j].push(results[i])
          }
        }
      }
    });
    
    return [results.slice(0, 20), multimg, localLength > 0];
  }
}

