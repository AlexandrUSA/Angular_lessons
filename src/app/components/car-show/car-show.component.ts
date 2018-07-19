import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { CarsService } from '@services/cars/cars.service';
import {Car} from '@app/interfaces';

@Component({
  selector: 'app-car-show',
  templateUrl: './car-show.component.html',
  styleUrls: [ './car-show.component.css' ]
})
export class CarShowComponent implements OnInit {

  id: number;
  car: Car;

  constructor (private route: ActivatedRoute, private service: CarsService) { }

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      // this.car = this.carService.cars.find((car: Car) => +car.id === +params.id);
      // console.log(this.car);
    });
  }

}
