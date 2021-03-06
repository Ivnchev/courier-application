import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';
import { AlertService } from '../../shared/services/alert.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  isLogged$ = this.authService.currentUser$
  isAdmin$ = this.authService.isAdmin$
  user
  hasError: boolean

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: StorageService,
    private alertService: AlertService
  ) {
    this.hasError = false
  }

  ngOnInit() : void { }

  public toggle = (): void => {
    // console.log(this.sidenavToggle);
    this.sidenavToggle.emit();
  }

  public logout = (): void => {
    this.user = this.storage.getItem('auth')
    this.authService.logout(this.user).subscribe({
      next: () => {
        this.user = undefined
        this.storage.removeItem('auth')
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }
}
