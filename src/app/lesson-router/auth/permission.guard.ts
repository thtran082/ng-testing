import { Injectable } from '@angular/core';
import { CanActivateChild, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivateChild {
  constructor(private auth: AuthService) {}

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.allowPermission$.pipe(
      map(val => val)
    );
  }

}
