import {Injectable} from '@angular/core';
import { Car } from '@app/interfaces';
import { ConsoleService } from '@services/console/console.service';

import { HttpClient } from '@angular/common/http';

// rxjs
import {BehaviorSubject, Observable} from 'rxjs/index';
import { Subject } from 'rxjs/index';

@Injectable()
export class CarsService {
  private readonly URL: string = `http://localhost:3000/cars`;

  public cars: Car[] = [];

  cars$: BehaviorSubject<Array<Car>> = new BehaviorSubject<Array<Car>>(this.cars);

  // Observable string sources
  // private carsSource = new Subject<Array<Car>>();
  // cars$ = this.carsSource.asObservable();

  // cars: Array<Car> = [];
  editing: boolean;

  test (car: Car) {
    this.cars$.next(this.cars);
  }

  /**
   * Добавление нового автомобиля в массив
   * @param {Car} car - Обьект автомобиля
   */
  addCar (car: Car) {
    this.store(car)
      .subscribe((newCar: Car) => this.cars.push(newCar));
  }

  /**
   * Получаем список автомобилей
   * @returns {Observable<Response>}
   */
  list (): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.URL);
  }

  /**
   * Добавление нового автомобиля
   * @param {Car} car
   * @returns {Observable<Car>}
   */
  store (car: Car): Observable<Car> {
    return this.http.post<Car>(this.URL, car);
  }

  /**
   * Изменение существующей машины
   * @param {Car} car - машина с новыми данными
   * @returns {Observable<Car>}
   */
  update (car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.URL}/${car.id}`, car);
  }

  remove (car: Car): Observable<Car> {
    return this.http.delete<Car>(`${this.URL}/${car.id}`);
  }

  constructor(private console: ConsoleService, private http: HttpClient) {
    this.list().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
}
