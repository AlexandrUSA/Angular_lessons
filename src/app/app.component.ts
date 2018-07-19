import {Component, OnInit} from '@angular/core';
import { RegistrationService } from '@services/registration/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private auth: RegistrationService) {}

  ngOnInit () {}
}
