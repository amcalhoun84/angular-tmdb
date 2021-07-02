import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  watch_results: any = [];
  media_results: any = [];
  parameters: any = [];

  constructor(private http: HttpClient) { }

  processParameters(route: ActivatedRoute) {
    const results = route.params.subscribe((params: Params) => {
      this.parameters = params;
    });

    return this.parameters;
  }

  // demonstration of services -- unfortunately, the services seem to break things... it was really weird.
  watchMedia(media: string, id: number) {

    const result = this.http.get<any>(`/api/watch/${media}/${id}`).subscribe(res => {
      this.watch_results = res[0];
    });    

    return this.watch_results;
  }
      

  detailsMedia(media: string, id: number) {
    const result = this.http.get<any>(`/api/details/${media}/${id}`).subscribe(res => {
      this.media_results = res; 
      this.media_results.media_type = media;
    });

    return this.media_results;
      
  }
}
