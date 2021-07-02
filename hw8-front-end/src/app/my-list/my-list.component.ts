import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  hasResults: boolean = false
  results: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

      
        var localStorage: any = window.localStorage;
        var localLength = 0;
        Object.keys(localStorage).forEach((key: string) => {
          if(key.includes("-watch")) {
            localLength++;
            var element = JSON.parse(localStorage.getItem(key) || '{}');
            this.results.push({
                id: element['id'],
                image: element['poster_path'],
                title: element['title'],
                media: element['media_type']
              });
        if(localLength > 0) {
          this.hasResults = true;
        }
      }
    });
  }

}
