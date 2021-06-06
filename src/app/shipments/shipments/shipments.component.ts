import { Component, OnInit } from '@angular/core';

import { Ipackage } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {

  searchValue: string
  packages: Ipackage[]


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Ipackage[]>('../assets/demo-data/package-data.json')
      .subscribe((result: Ipackage[]) => {
        this.packages = result
      })
  }


}
