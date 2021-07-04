import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Ipackage, IUser } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/services/store.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit, OnChanges {


    isAdmin$ = this.userService.isAdmin$
    userData: IUser
    searchValue: string
    packages: Ipackage[]


    constructor(
        private storeService: StoreService,
        private userService: UserService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.storeService.getShipments().subscribe({
            next: (data: Ipackage[]) => this.packages = data
        })

        this.userService.getUser().subscribe({
            next: (userData: IUser) => this.userData = userData
        })
    }

    ngOnChanges(): void {
        this.storeService.getShipments().subscribe({
            next: (data: Ipackage[]) => this.packages = data
        })
    }


    deleteHandler(event: HTMLElementEventMap, shipmentId: string, shipmentRow: HTMLElement): void {

        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            this.storeService.deleteShipment(shipmentId).subscribe({
                next: (data: Ipackage) => {
                    shipmentRow.remove()
                }
            })
        }
    }


    updateHandler(event: HTMLElementEventMap, shipmentId: string): void {
        this.router.navigateByUrl(`/shipments/${shipmentId}/edit`)
    }


}
