import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  log (message: any): any {
    console.log(message);
  }
}
