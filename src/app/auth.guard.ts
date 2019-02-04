import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentInteractionService } from './service/component-interaction.service';

@Injectable()
export class AuthGuard implements CanActivate {

  /** constructor of service */
  constructor(private _componentInteractionService: ComponentInteractionService,
    private _router: Router) {

  }
  canActivate(): boolean {
    if (this._componentInteractionService.isAuthenticated)
      return true;
    else {
      this._router.navigate(["login"]);
    }
  }
}
