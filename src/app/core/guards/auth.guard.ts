import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.authService.currentUser$.pipe(
            switchMap(user => user === undefined ? this.authService.authenticate() : [user]),
            map(user => true || !!user),
            first()
        )
    }
}