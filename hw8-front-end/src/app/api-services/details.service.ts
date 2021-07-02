import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }


  getDetails(media: string, id: number) {
    let results = this.http.get<any>(`/api/details/${media}/${id}`).subscribe(res => res);
    return results;
  }
  
}
