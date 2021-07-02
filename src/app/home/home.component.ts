import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { INews } from '../shared/interfaces';
import { StoreService } from '../core/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class HomeComponent implements OnInit {

  news: INews[]

  selectedIndex = 0;

  constructor(
    private location: Location,
    private storeService: StoreService
  ) {
    const index = Number(this.location.path(true).substring(1)) || 0
    this.selectedIndex = index

    this.location.subscribe((value: PopStateEvent) => {
      const index = Number(value.url.substring(6)) || 0
      this.selectedIndex = value.url ? index : 0
    });
  }

  ngOnInit(): void {
    // this.http.get<INews[]>('../assets/demo-data/news-data.json')
    // .subscribe((result: INews[]) => {
    //   this.news = result
    // })
    this.storeService.getNews().subscribe((result: INews[]) => {
      result.map((x, i) => { x['link'] = i; return x })
      this.news = result
    })
  }

}
