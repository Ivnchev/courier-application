import { Component, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  subscription: Subscription

  isLogged$ = this.authService.currentUser$
  isAdmin$ = this.authService.isAdmin$
  user
  
  constructor(private router: Router, private authService: AuthService, public storage: StorageService) {
    
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
        window.alert(err.message)
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
