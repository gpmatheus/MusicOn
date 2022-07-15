import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasPermissionGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authenticated = this.authenticationService.isAuthenticated()

    // somente para teste
    console.log(authenticated);

    if (!authenticated) {
      return this.router.parseUrl('/login');
    }

    return authenticated;
  }

}
