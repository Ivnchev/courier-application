import { Component, OnInit } from '@angular/core';
import { IClaim } from '../../shared/interfaces';
import { AuthService } from 'src/app/core/services/auth.service';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';


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


  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.storeService.getClaims().subscribe({
      next: (data: IClaim[]) => this.claims = data
    })
  }

  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }


  deleteHandler(event: HTMLElementEventMap, claimId: string, claimRow: HTMLElement): void {

    const confirm = window.confirm('Are you sure you want to delete?')
    if (confirm) {
      this.storeService.deleteClaim(claimId).subscribe({
        next: (data: IClaim) => {
          claimRow.remove()
        }
      })
    }
  }


  updateHandler(event: HTMLElementEventMap, claimId: string): void {
    this.router.navigateByUrl(`/${claimId}/edit-claim`)
  }

}

