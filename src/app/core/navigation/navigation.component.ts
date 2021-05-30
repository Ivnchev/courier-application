import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  isLogged = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public toggle = (): void => {
    // console.log(this.sidenavToggle);
    this.sidenavToggle.emit();
  }

  public logout = (): void => {}

}
