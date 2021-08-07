import { Component, OnInit } from '@angular/core';
import { IClaim } from '../../shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ClaimService } from '../services/claim.service';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {

  isLogged$ = this.authService.isLogged$
  isAdmin$ = this.authService.isAdmin$
  user$ = this.authService.currentUser$
  searchValue: string
  claims: IClaim[]
  isLoading: boolean = false
  hasError: boolean = false

  constructor(
    private authService: AuthService,
    private claimService: ClaimService,
    private router: Router,
    private matDialog: MatDialog,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.hasError = false
    this.claimService.getClaims().subscribe({
      next: (data: IClaim[]) => {
        this.isLoading = false
        this.claims = data
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

  openModal(event: HTMLElementEventMap, claimId: string, claimRow: HTMLElement): void {
    this.hasError = false
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
        if (result) {
          this.deleteHandler(claimId, claimRow)
        }
      },
      error: err => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  deleteHandler(claimId: string, claimRow: HTMLElement): void {
    this.isLoading = true
    this.hasError = false

    this.claimService.deleteClaim(claimId).subscribe({
      next: (data: IClaim) => {
        this.isLoading = false
        claimRow.remove()
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }


  updateHandler(event: HTMLElementEventMap, claimId: string): void {
    this.router.navigateByUrl(`/client-center/claims/${claimId}/edit`)
  }

}

