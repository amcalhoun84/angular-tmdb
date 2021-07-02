import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { interval, Observable, of, OperatorFunction } from 'rxjs';
import { tap, debounce, switchMap, map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { SearchService } from '../api-services/search-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  providers: [SearchService],
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  searching = false;
  searchFailed = false;
  model: any;
  image: any = [];

  constructor(private searchService: SearchService) {
  }


  searchTitle = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap( (term) =>  this.searchService.searchTitle(term) )
    );
   
  }

  formatter = (x: {name: string;}) => x.name;

  // ngOnInit(): void {
  //   this.search_term.valueChanges.pipe(
  //     tap(() => this.isLoading = true),
  //     debounce(() => interval(1000)),
  //     switchMap(value => this.searchTitle(value))
  //   ).subscribe(res => {
  //     this.result_list = res;
  //     this.isLoading = false;
  //   }, err => {
  //     console.error(err.error);
  //   });

  // }
}
