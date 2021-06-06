import { Component, OnInit } from '@angular/core';
import { IClaim } from '../../shared/interfaces';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

  searchValue: string
  claims: IClaim[]



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IClaim[]>('../assets/demo-data/claims-data.json')
      .subscribe((result: IClaim[]) => {
        this.claims = result
      })
  }



  

}

