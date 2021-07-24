import { Component, OnInit } from '@angular/core';
import { EntryCountService } from 'src/app/shared/services/entry-count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  counter$ = this.counterService.count$

  constructor(private counterService: EntryCountService) { }

  ngOnInit(): void {
    this.counterService.get().subscribe()
  }

}
