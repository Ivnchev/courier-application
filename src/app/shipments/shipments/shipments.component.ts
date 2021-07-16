import { Component, OnInit, OnChanges } from '@angular/core';

import { Ipackage } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ShipmentService } from '../services/shipment.service';

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
        private shipmentService: ShipmentService,
        private authService: AuthService,
        private router: Router,
        private matDialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.isLoading = true
        this.shipmentService.getShipments().subscribe({
            next: (data: Ipackage[]) => {
                this.isLoading = false
                this.packages = data
            },
            error: err => {
                this.isLoading = false
            }
        })

    }

    ngOnChanges(): void {
        this.shipmentService.getShipments().subscribe({
            next: (data: Ipackage[]) => this.packages = data,
            error: err => {
                this.isLoading = false
            }
        })
    }

    toogleInfo(shipment): void {
        shipment.showDetails = !shipment.showDetails
    }


    openModal(event: HTMLElementEventMap, shipmentId: string, shipmentRow: HTMLElement): void {
        const dialogCfg = new MatDialogConfig()

        dialogCfg.disableClose = true;
        dialogCfg.id = "custom-modal";
        dialogCfg.data = {
            title: "Are you sure you want to delete?",
            isConfirmed: true,
        }
        const modalDialog = this.matDialog.open(ModalComponent, dialogCfg);

        modalDialog.afterClosed().subscribe({
            next: result => {
                if(result){
                    this.deleteHandler(shipmentId, shipmentRow)
                }
            },
            error: err => {
                this.isLoading = false
            }
        })
    }

    deleteHandler(shipmentId: string, shipmentRow: HTMLElement): void {
            this.isLoading = true
            this.shipmentService.deleteShipment(shipmentId).subscribe({
                next: (data: Ipackage) => {
                    this.isLoading = false
                    shipmentRow.remove()
                },
                error: err => {
                    this.isLoading = false
                }
            })
    }


    updateHandler(event: HTMLElementEventMap, shipmentId: string): void {
        this.router.navigateByUrl(`/shipments/${shipmentId}/edit`)
    }


}
