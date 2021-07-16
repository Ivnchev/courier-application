import { Component, OnInit } from '@angular/core';
import { IClaim } from '../../shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';


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

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.storeService.getClaims().subscribe({
      next: (data: IClaim[]) => {
        this.isLoading = false
        this.claims = data
      }
    })
  }

  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

  openModal(event: HTMLElementEventMap, claimId: string, claimRow: HTMLElement): void {
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
      }
    })
  }

  deleteHandler(claimId: string, claimRow: HTMLElement): void {
    this.isLoading = true
    this.storeService.deleteClaim(claimId).subscribe({
      next: (data: IClaim) => {
        this.isLoading = false
        claimRow.remove()
      }
    })
  }


  updateHandler(event: HTMLElementEventMap, claimId: string): void {
    this.router.navigateByUrl(`/client-center/claims/${claimId}/edit`)
  }

}

