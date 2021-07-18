import { Component, OnInit, OnChanges } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { INews } from '../../shared/interfaces';
import { AuthService } from '../../auth/auth.service';
import { NewsService } from 'src/app/admin/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class HomeComponent implements OnChanges {

  isLogged$ = this.authService.isLogged$

  news: INews[]

  selectedIndex = 0;

  constructor(
    private location: Location,
    private newsService: NewsService,
    private authService: AuthService
  ) {
    const index = Number(this.location.path(true).substring(1)) || 0
    this.selectedIndex = index

    this.location.subscribe((value: PopStateEvent) => {
      const index = Number(value.url.substring(6)) || 0
      this.selectedIndex = value.url ? index : 0
    });
    this.newsService.getAll().subscribe((result: INews[]) => {
      result.map((x, i) => { x['link'] = i; return x })
      this.news = result
    })
  }

  ngOnChanges(): void {
    this.newsService.getAll().subscribe((result: INews[]) => {
      result.map((x, i) => { x['link'] = i; return x })
      this.news = result
    })
  }

}
