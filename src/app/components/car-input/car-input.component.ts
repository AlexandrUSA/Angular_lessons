import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars/cars.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-car-input',
  templateUrl: './car-input.component.html',
  styleUrls: [ './car-input.component.css' ]
})
export class CarInputComponent implements OnInit {

  constructor(private service: CarsService) {}
  name: string;
  year: number = new Date().getFullYear();
  price: number;

  addCar (event: Event) {
    event.preventDefault();
    if (this.checkFields()) {
      this.service.addCar({
        name: this.name,
        year: this.year,
        added: false,
        price: this.price
      });
      this.name = '';
      this.price = 0;
      this.year = new Date().getFullYear();
    }
  }
  checkFields () {
    return this.name && this.year && this.price;
  }
  ngOnInit() {}

}
