import { Component, OnInit } from '@angular/core';
import { ControlViewDirective } from '../control-view.directive';

import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user$ = this.userService.user$
  isAdmin$ = this.userService.isAdmin$
  isLoading: boolean = false
  userData: IUser

  constructor(
    private userService: UserService,
    private router: Router,
    private matDialog: MatDialog
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
      next: (userData: IUser) => this.userData = userData
    })
  }

  toggleView(controlsView: ControlViewDirective): void {
    const el = controlsView.elementRef.nativeElement.id
    this.controls = this.resetControls()
    this.controls[el] = !this.controls[el]
  }

  openModal(): void {
    const dialogCfg = new MatDialogConfig()

    dialogCfg.disableClose = true;
    dialogCfg.id = "custom-modal";
    dialogCfg.data = {
        title: "Are you sure you want to say Goodbye?",
        isConfirmed: true,
        userDelete: true,
        accept: 'Goodbye'
    }
    const modalDialog = this.matDialog.open(ModalComponent, dialogCfg);

    modalDialog.afterClosed().subscribe({
        next: result => {
            if(result){
                this.deleteUser()
            }
        }
    })
}

  deleteUser(): void {
      this.isLoading = true
      this.userService.deleteUser().subscribe({
        next: data => {
          this.isLoading = false
          this.router.navigateByUrl('/')
        }
      })
    
  }


}
