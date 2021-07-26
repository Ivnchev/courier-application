import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-client-services',
  templateUrl: './client-services.component.html',
  styleUrls: ['./client-services.component.css']
})
export class ClientServicesComponent implements OnInit {

  location

  constructor(
    private geoLocation: GeolocationService
  ) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
      this.geoLocation.getLocation(position.coords.latitude, position.coords.longitude).then(data => this.location = data)
      })
    }
  }

}
