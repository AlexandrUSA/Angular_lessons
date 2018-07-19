import { Component, OnInit } from '@angular/core';
import { CarsService } from '@services/cars/cars.service';
import { Car } from '@app/interfaces';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: [ './car-list.component.css' ],
  providers: [ CarsService ]
})
export class CarListComponent implements OnInit {
  search = '';

  constructor (private service: CarsService) {}

  basketCheck (): boolean {
    const length = this.getBuyCars().length;
    return length > 0;
  }

  private getBuyCars (): Car[] {
    return this.service.cars.filter(car => car.added === true);
  }

  getTotalPrice (): number {
    let sum = 0;
    const cars = this.getBuyCars();
    cars.forEach(el => { sum += +el.price; });
    return sum;
  }

  ngOnInit () {}

}
