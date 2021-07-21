import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap, first, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable()

export class AuthGuard implements CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.currentUser$.pipe(
            switchMap(user => user === undefined ? this.authService.authenticate() : [user]),
            map(user => {
                const isLogged = childRoute.data.isLogged
                if(typeof isLogged !== 'boolean' || !!user === isLogged) return true
                this.router.navigateByUrl('/')
            }),
            first()
        )
    }
}