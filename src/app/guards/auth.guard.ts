import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from '../components/loading/loading.service';
import { ConnectionService } from '../services/connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private connection: ConnectionService,
    private loadingService: LoadingService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.loadingService.on("base");
    return new Promise(async (resolve) => {

      // If already connected, then resolve immediately
      if (this.connection.isConnected$.getValue()) {
        this.loadingService.off("base");
        resolve(true);
        return;
      }

      // Otherwise try to connect automatically
      try {
        await this.connection.connect();
      }
      catch (err) {

        // If connecting with cached provider is not possible, then show the error and redirect
        this.loadingService.off("base");
        this.router.navigate([""], { queryParams: { returnUrl: state.url } });
        resolve(false);
        return;
      }

      this.loadingService.off("base");
      resolve(true);
    });
  }
  
}
