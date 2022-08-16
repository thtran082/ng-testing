import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { lastValueFrom, map, Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'any'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isLoggedIn$.pipe(
      map(isLoggedIn => isLoggedIn || this.router.createUrlTree(['']))
    );
  }
}
