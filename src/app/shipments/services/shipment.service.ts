import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) { }

  getShipments(): Observable<any> {
    return this.http.get('shipments')
  }

  getShipment(id: string): Observable<any> {
    return this.http.get('shipments/' + id)
  }

  postShipment(data: object): Observable<any> {
    return this.http.post('shipments', data)
  }

  editShipment(id: string, data: object): Observable<any> {
    return this.http.put('shipments/' + id, data)
  }

  deleteShipment(id: string): Observable<any> {
    return this.http.delete('shipments/' + id)
  }
}
