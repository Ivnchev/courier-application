import { Component, OnInit } from '@angular/core';
import { ControlViewDirective } from '../control-view.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{

  user = {
    username: 'Pesho',
    image: '../../assets/images/user-logo.png',
    shipments: '3'
  }

  
  resetControls = () => this.controls = {
    editMode: true,
    claimMode: true,
    myShipments: true,
    createShipment: true,
  }

  controls= this.resetControls()

  public isVisible = false

  constructor() {  }

  ngOnInit() {
    this.controls.myShipments = false
  }

  toggleView(controlsView: ControlViewDirective) {
    const el = controlsView.elementRef.nativeElement.id
    this.controls = this.resetControls()
    this.controls[el] = !this.controls[el]
  }




}
