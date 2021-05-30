import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class HomeComponent implements OnInit {

  public slides = [
    {
      src: 'assets/images/banking.jpg',
      name: 'POS payments',
      description: 'Learn more about POS payments ',
      link: '#0'
    },
    {
      src: 'assets/images/truck-crash.jpg',
      name: 'Truck Crash',
      description: 'Our truck is crashed!\nLearn more about!',
      link: '#1'
    },
    {
      src: 'assets/images/new-prices.jpg',
      name: 'New Prices',
      description: 'Learn more about our new price politicy',
      link: '#2'
    },
  ]


  selectedIndex = 0;

  constructor(private location: Location) {
    const index = Number(this.location.path(true).substring(1)) || 0
    this.selectedIndex = index

    // console.log(this.selectedIndex);

    this.location.subscribe((value: PopStateEvent) => {
      const index = Number(value.url.substring(1)) || 0
      this.selectedIndex = value.url ? index : 0
    });
  }

  ngOnInit(): void {

  }

}
