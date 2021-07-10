import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Ipackage, IUser } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit, OnChanges {


    isAdmin$ = this.authService.isAdmin$
    user$ = this.authService.currentUser$
    searchValue: string
    packages: Ipackage[]
    isLoading: boolean = false


    constructor(
        private storeService: StoreService,
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.isLoading = true
        this.storeService.getShipments().subscribe({
            next: (data: Ipackage[]) => {
                this.isLoading = false
                this.packages = data
            }
        })

    }

    ngOnChanges(): void {
        this.storeService.getShipments().subscribe({
            next: (data: Ipackage[]) => this.packages = data
        })
    }

    toogleInfo(shipment): void {
        shipment.showDetails = !shipment.showDetails
    }

    deleteHandler(event: HTMLElementEventMap, shipmentId: string, shipmentRow: HTMLElement): void {

        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            this.isLoading = true
            this.storeService.deleteShipment(shipmentId).subscribe({
                next: (data: Ipackage) => {
                    this.isLoading = false
                    shipmentRow.remove()
                }
            })
        }
    }


    updateHandler(event: HTMLElementEventMap, shipmentId: string): void {
        this.router.navigateByUrl(`/shipments/${shipmentId}/edit`)
    }


}
