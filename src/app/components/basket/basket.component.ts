import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '@services/console/console.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
  // providers: [ConsoleService] // Не нужно т.к. мы апописали сервису корневую
})
export class BasketComponent implements OnInit {

  constructor (private console: ConsoleService) {}

  @Input() inBasket: boolean;
  @Input() price;

  ngOnInit() {}

}
