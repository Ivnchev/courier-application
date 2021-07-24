import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntryCountService } from './shared/services/entry-count.service';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isRefreshed: boolean
  title = 'courier-application';
  counterSub: Subscription
  routerSub: Subscription

  constructor(
    private counterService: EntryCountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe(e => {
      // console.log(this.router.navigated, e);
      if (e instanceof NavigationStart) {
        this.isRefreshed = !this.router.navigated;
      }
    })
    if(!this.isRefreshed){
      this.counterSub = this.counterService.post().subscribe()
    }
  }

  ngOnDestroy(): void {
    this.counterSub.unsubscribe()
    this.routerSub.unsubscribe()
  }
}
