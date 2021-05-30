import { Component, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'
import { carouselAnimation } from './carousel.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [carouselAnimation]
})
export class CarouselComponent implements OnDestroy {

  @Input() banners

  current = 0

  cycleTime: Subscription

  constructor() {
    this.cycleTime = interval(5000)
      .subscribe(() => { this.routSlides() })
  }

  ngOnDestroy(): void {
    this.cycleTime.unsubscribe()
  }

  routSlides(): void {
    const next = this.current + 1
    const prev = this.banners.length - 1
    this.current = this.current === prev ? 0 : next

    // console.log(this.current);
  }

}
