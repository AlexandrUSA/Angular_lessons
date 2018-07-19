import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrationService } from '@services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor (private auth: RegistrationService) {}
  ngOnInit () {
    this.form = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      password_confirm: new FormControl(''),
      country: new FormControl('USA')
    });
  }

  /**
   * Проверка поля на наличие ошибок
   * @param {string} field  - Название поля, в котором ищем ошибку
   * @returns {boolean} - Есть ли в поле ошибка
   */
  isInvalid (field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  /**
   * Регистрация нового пользователя в сервисе RegistrationService
   */
  submitHandler () {
    this.auth.makeAuth(this.form.value);
  }
}
