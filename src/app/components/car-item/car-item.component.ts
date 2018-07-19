import {Component, OnInit, Input, Output} from '@angular/core';
import { CarsService } from "@services/cars/cars.service";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  constructor(private service: CarsService) { }

  @Input('car') item: {
    name: string,
    year: number,
    added: boolean,
    price: number
  };

  editHandler () {
    this.service.editing = true;
  }

  getClass () {
    const classes = `list-group-item d-flex justify-content-between align-items-center mt-2`;
    return (this.item.added) ? classes + ` list-group-item-success` : classes;
  }

  ngOnInit() {}

}
