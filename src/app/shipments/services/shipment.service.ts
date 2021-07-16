import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) { }

  getShipments(): Observable<any> {
    return this.http.get(constants.baseUrl + 'shipments', { withCredentials: true })
  }

  getShipment(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'shipments/' + id, { withCredentials: true })
  }

  postShipment(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'shipments', data, { withCredentials: true })
  }

  editShipment(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'shipments/' + id, data, { withCredentials: true })
  }

  deleteShipment(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'shipments/' + id, { withCredentials: true })
  }
}
