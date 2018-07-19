import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "@app/interfaces";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  defaultCountry = 'USA';
  defaultForm: User;

  @ViewChild('form') form;

  constructor () {
    // this.defaultForm = JSON.parse(sessionStorage.getItem('auth')) || {};
    // this.defaultForm.country = this.defaultForm.country || 'USA';
  }
  ngOnInit () {}

  isInvalid (el, orig = null) {
    if (orig) {
      return (el.value !== orig.value) && el.touched;
    }
    return el.invalid && el.touched;
  }

  submitHandler () {
    sessionStorage.setItem('auth', JSON.stringify(this.form.value));
  }

  clearForm () {
    this.form.reset();
    sessionStorage.removeItem('auth');
  }
}
