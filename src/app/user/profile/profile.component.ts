import { Component, OnInit } from '@angular/core';
import { ControlViewDirective } from '../control-view.directive';

import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

  user$ = this.userService.user$
  isAdmin$ = this.authService.isAdmin$
  userData
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    
  }

  resetControls = () => this.controls = {
    editMode: true,
    claimMode: true,
    myShipments: true,
    createShipment: true,
  }

  controls = this.resetControls()

  public isVisible = false



  ngOnInit() {
    this.controls.myShipments = false

    this.userService.getUser().subscribe({
      next: userData => this.userData = userData
    })
  }

  toggleView(controlsView: ControlViewDirective) {
    const el = controlsView.elementRef.nativeElement.id
    this.controls = this.resetControls()
    this.controls[el] = !this.controls[el]
  }




}
