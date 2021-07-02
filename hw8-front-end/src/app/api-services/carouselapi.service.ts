import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselapiService {

  constructor(private http: HttpClient) { }

    getData(media: string, category: string) {
    var results: any = [];
    const result = this.http.get<any>(`/api/category/${media}/${category}`).subscribe((res) => {
        var result_list = res.slice(0,5);
        result_list.forEach((element: any) => {
          var object = {
            id: element.id,
            image: element.poster_path,
            title: element.title,
            media: media
          };
          results.push(object);
        });       
      });
      return results;

  }

}
