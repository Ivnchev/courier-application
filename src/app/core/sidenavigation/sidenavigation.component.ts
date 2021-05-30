import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();


  isLogged = true

  constructor() { }

  ngOnInit(): void {
  }

  public close = (): void => this.sidenavClose.emit()

}
