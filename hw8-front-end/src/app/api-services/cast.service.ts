import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { interval, Observable, of, OperatorFunction } from 'rxjs';
import { tap, debounce, switchMap, map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getCast(media: string, id: number) {
    var cast: any = [];
      if(media !== 'tv' && media !== 'movie') {
        return of([]);
      }
      
     return this.http.get<[any, string[]]>(`/api/cast/${media}/${id}`).pipe(
        map(response => response)         
      );
    
     }
  }
