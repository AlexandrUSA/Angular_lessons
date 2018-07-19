import { Injectable } from '@angular/core';
import { User } from '@app/interfaces';
import {ConsoleService} from '@services/console/console.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private auth: {} | null;

  makeAuth (user: User): void {
    this.auth = user;
    // this.router.navigate(['cars'], {relativeTo: this.route}); // - Относительный путь
    this.router.navigate(['/cars']); // - Абсолютный путь
  }

  isLogged () {
    // Симулируем отправу на сервер запроса
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(!!this.auth), 1000);
    });
  }

  makeLogout (): void {
    this.auth = null;
  }

  constructor(
    private console: ConsoleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
