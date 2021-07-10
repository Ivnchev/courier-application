import { Component, OnInit } from '@angular/core';
import { ControlViewDirective } from '../control-view.directive';

import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user$ = this.userService.user$
  isAdmin$ = this.userService.isAdmin$
  userData
  constructor(
    private userService: UserService,
    private router: Router
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



  ngOnInit(): void {
    this.controls.myShipments = false

    this.userService.getUser().subscribe({
      next: userData => this.userData = userData
    })
  }

  toggleView(controlsView: ControlViewDirective): void {
    const el = controlsView.elementRef.nativeElement.id
    this.controls = this.resetControls()
    this.controls[el] = !this.controls[el]
  }

  deleteUser(): void {
    const confirm = window.confirm("Are you sure?")
    if(confirm){
      this.userService.deleteUser().subscribe({
        next: data => this.router.navigateByUrl('/auth/register')
      })
    }
    
  }


}
