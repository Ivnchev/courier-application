import { Component, OnInit, OnChanges } from '@angular/core';

import { Ipackage } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

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
        private matDialog: MatDialog
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
            }
        })
    }

    deleteHandler(shipmentId: string, shipmentRow: HTMLElement): void {
            this.isLoading = true
            this.storeService.deleteShipment(shipmentId).subscribe({
                next: (data: Ipackage) => {
                    this.isLoading = false
                    shipmentRow.remove()
                }
            })
    }


    updateHandler(event: HTMLElementEventMap, shipmentId: string): void {
        this.router.navigateByUrl(`/shipments/${shipmentId}/edit`)
    }


}
