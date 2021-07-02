import { Component, OnInit, ViewChild } from '@angular/core';
import { WatchService } from '../api-services/watch.service';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {YouTubePlayerModule} from '@angular/youtube-player';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  results: any = [];
  details: any = [];
  retParams: any = [];
  cast: any = [];
  reviews: any = [];
  person: any = [];
  social_media: any = [];
  number_of_reviews: number = 0;
  movieWatchlist: string = "Add to Watchlist";
  movieInWatchList: boolean = false;
  alertShow: boolean = false;
  alertMessage: string = '';
  alertType: string = '';
  formatMedia: string = '';

  @ViewChild('selfClosing', {static: false}) selfClosing: NgbAlert | undefined;

  constructor(private watchService: WatchService, private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private http: HttpClient) { 
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    })

  }
 
  ngOnInit(): void {
    window.scroll(0,0);
    var media: string;
    var id: string;
    this.retParams = this.watchService.processParameters(this.route);
    
    media = this.retParams['media'];
    id = this.retParams['id'];

    this.formatMedia = (media === 'movies') ? 'Movies' : 'TV';

    this.checkMovie(id);
       
    //this.results = this.watchService.watchMedia(media, id);
    this.http.get<any>(`/api/watch/${media}/${id}`).subscribe(res => {
      this.results = res[0] || res;
    });    

    this.http.get<any>(`/api/details/${media}/${id}`).subscribe(res => {
      this.details = res; 
      this.details.media_type = media;
      this.details.id = id;
      this.details.last_accessed = new Date();
      localStorage.setItem(`${id}-continue`, JSON.stringify(this.details));
    });

    this.http.get<any>(`/api/reviews/${media}/${id}`).subscribe(res => {
      this.reviews = res;
      this.number_of_reviews = this.reviews.length;
    });

    this.http.get<any>(`/api/cast/${media}/${id}`).subscribe(res => {
      this.cast = res;
    });    
  }

  openCastProfile(content: any, id: string) {
    let person_result = this.http.get<any>(`/api/person/${id}`).subscribe((res) => 
    {
      this.person = res;
    });

    let sm_result = this.http.get<any>(`/api/person/${id}/external`).subscribe((res) => 
    {
      this.social_media = res;
    });
    

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result => {
    }));
  }

  addRemoveMovie(id: string) {
    
    if(this.movieInWatchList === true) {
      localStorage.removeItem(id + '-watch');
      this.movieWatchlist = "Add to Watchlist";
      this.movieInWatchList = false;
      this.alertShow = true;
      this.alertType = 'danger';
      this.alertMessage = 'Removed from watchlist'

    }
    else {
      localStorage.setItem(id + '-watch', JSON.stringify(this.details));
      this.movieWatchlist = "Remove from Watchlist";
      this.movieInWatchList = true;
      this.alertShow = true;
      this.alertType = 'success';
      this.alertMessage = 'Added to watchlist'
    }

    setTimeout(() => this.selfClosing?.close(), 5000);
  }

  checkMovie(id: string) {
    Object.keys(localStorage).forEach((key: string) => {
        if(key === `${id}-watch`) {
          this.movieWatchlist = "Remove from Watchlist";
          this.movieInWatchList = true;
        }
      });
  }  
}
