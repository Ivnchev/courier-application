import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, AfterViewInit {

  @Input() status: string
  @ViewChild('statusBar') statusBar: ElementRef

  constructor(
    public render: Renderer2
  ) { }

  statuses: object = {
    created: 2,
    transit: 50,
    completed: 100
  }

  ngAfterViewInit() {
    this.render.setStyle(
      this.statusBar.nativeElement,
      'width',
      `${this.statuses[this.status]}%`
      )
  }

  ngOnInit(): void { }

}
