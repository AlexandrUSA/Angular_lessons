import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {RegistrationService} from '@services/registration/registration.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  /**
   * Получаем доступ к сервису регистрации
   * @param {RegistrationService} auth
   */
  constructor(private auth: RegistrationService) {}

  /**
   * Проверяем через сервис регистрации залогинен ли пользователь
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<boolean> | Promise<boolean> | boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLogged().then((status: boolean) => status);
  }
}
