import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoryCardService } from '../api-services/category_card.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css'],
  providers: [NgbCarouselConfig]
})
export class CategoryCardsComponent implements OnInit {
  
  @Input() media: string = 'media';
  @Input() category: string = 'category';
  @Input() category_title: string = 'category_title'
  @Input() type: string = "type";
  @Input() id: string = "id";
  @Input() rec: string = "rec";
  
  result_list: any = [];
  continue_watching: any = [];
  results: any = [];
  multimg: any = [];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  mobile = false;
  watched: boolean = false;
  notwatched: boolean = false;
  hasResults: boolean = true;

  constructor(config: NgbCarouselConfig, private http: HttpClient, private cardService: CategoryCardService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    var target_url = '';
    if(window.screen.width <= 992) {
      this.mobile = true;
      this.showNavigationArrows = true;
      this.showNavigationIndicators = false;
    }


    if(this.type === "trending") {
      target_url = `/api/${this.type}/${this.media}/day`;
      [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
    } else if (this.type === "category") {
      target_url = `/api/${this.type}/${this.media}/${this.category}`;
      [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
    } else if (this.type === "likeness") { 
      target_url = `/api/recommendations/${this.media}/${this.id}/${this.rec}`;
      [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
    } else {
      let localStorage = window.localStorage;
      [this.results, this.multimg, this.hasResults] = this.cardService.retrieveFromLocalStorage(localStorage);
    }
    
    


  }
}
