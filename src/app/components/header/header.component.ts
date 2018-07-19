import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '@services/registration/registration.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: RegistrationService, private router: Router) {}

  makeLogout () {
    this.auth.makeLogout();
    this.router.navigate(['/']);
  }
  ngOnInit() {}

}
