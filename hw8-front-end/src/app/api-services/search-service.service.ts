import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { interval, Observable, of, OperatorFunction } from 'rxjs';
import { tap, debounce, switchMap, map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
const API_ENDPOINT = '/api/multi/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  res: any = [];

  constructor(private http: HttpClient) {}
    
    searchTitle(term: string) {
      if(term === '' || term.trim().length == 0) {
        return of([]);
      }
      
     return this.http.get<[any, string[]]>(API_ENDPOINT + term).pipe(
        map(response => response)         
      );
    
     }

}