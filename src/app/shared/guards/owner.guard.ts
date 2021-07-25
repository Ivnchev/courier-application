import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  canActivate(childRoute: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUser().pipe(
      map(data => {
        const id = childRoute.params['id']
        const shipmentsCheck = data?.shipments.find(x => x === id)
        const claimsCheck = data?.claims.find(x => x === id)
        if (shipmentsCheck || claimsCheck || data.role === 'admin') {
          return true
        }
        this.router.navigateByUrl('/')
        return
      }),
      first()
    )
  }

}
