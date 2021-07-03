import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnChanges {

  @Output() sidenavClose = new EventEmitter();

  isLogged$ = this.authService.currentUser$
  isAdmin$ = this.authService.isAdmin$
  user
  constructor(private router: Router, private authService: AuthService, public storage: StorageService) { }

  ngOnChanges(): void {
    this.user = this.storage.getItem('user')
  }

  public close = (): void => this.sidenavClose.emit()

  public logout = (): void => {
    this.authService.logout(this.user).subscribe({
      next: (data) => {
        this.user = undefined
        this.storage.removeItem('user')
        this.storage.removeItem('auth')
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        window.alert(err.message)
      }
    })
  }

}
