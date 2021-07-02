import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselapiService } from '../api-services/carouselapi.service';
import { WatchService } from '../api-services/watch.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {
  results: any = [];
  guest: any = [];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;



  constructor(config: NgbCarouselConfig, private carouselService: CarouselapiService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    if(window.screen.width <= 992) {
      this.showNavigationArrows = true;
      this.showNavigationIndicators = false;
    }
    this.results = this.carouselService.getData('movie', 'now_playing');
  }

}
