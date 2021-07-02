import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { DetailsService } from '../api-services/details.service';
import { interval, Observable, of, OperatorFunction } from 'rxjs';
import { tap, debounce, switchMap, map, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  results: any = [];
  details: any = [];
  some_params: any = [];

  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.some_params = params;
    })
      
      
    
  }

}
