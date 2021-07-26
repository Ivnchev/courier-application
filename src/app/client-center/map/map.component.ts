import { Component, OnInit, ViewChild } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('map') elementMap;

  location
  markers = [
    [42.698334, 23.319941],
    [42.510578, 27.461014],
    [43.204666, 27.910543],
    [42.492603, 26.501442],
    [42.136097, 24.742168],
    [43.835571, 25.965654],
    [43.283333, 26.933332],
    [42.43278, 25.64194],
  ]

  constructor(
    private geoLocation: GeolocationService
  ) { 
    let loader
    loader = new Loader({ apiKey: '' })
    loader.load()
  }

  ngOnInit(): void {
    

    navigator.geolocation.getCurrentPosition(this.createMap, err => {
      this.createMap('')
    })
  }

  createMap = (position) => {
    let currentMap
    let coordinates = {
      latitude: position?.coords?.latitude || 42.6194,
      longitude: position?.coords?.longitude || 25.393
    }
    this.geoLocation.getLocation(coordinates.latitude, coordinates.longitude)
    .then(data => {
      this.location = data
    }).then(() => {
      currentMap = new google.maps.Map(this.elementMap.nativeElement, {
        center: { lat: coordinates.latitude, lng: coordinates.longitude},
        zoom: position.coords ? 12 : 7
      })
      this.markers.map(([lat, lng]) => {
        new google.maps.Marker(({
          position: { lat: lat, lng: lng },
          map: currentMap,
        } as google.maps.MarkerOptions));
      })
    })
  }


}
