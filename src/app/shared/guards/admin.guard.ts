import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.currentUser$.pipe(
        switchMap(user => user === undefined ? this.authService.authenticate() : [user]),
        map(user => { 
            if(user?.role === 'admin') return true
            this.router.navigateByUrl('/')
            return false
            }),
        first()
    )
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.currentUser$.pipe(
      switchMap(user => user === undefined ? this.authService.authenticate() : [user]),
      map(user => { 
          if(user?.role === 'admin') return true
          this.router.navigateByUrl('/')
          return false
          }),
      first()
  )
}
  
}
