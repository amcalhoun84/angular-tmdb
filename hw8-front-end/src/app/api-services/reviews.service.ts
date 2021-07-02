import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getReviews(media: string, id: number) {
    var reviews: any = []
    const results = this.http.get<any>(`/api/reviews/${media}/${id}`).subscribe((res) => {
      reviews = res
    });

    return reviews;
  }

}
