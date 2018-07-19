// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { CarListComponent } from '@components/car-list/car-list.component';
import { CarItemComponent } from '@components/car-item/car-item.component';
import { CarInputComponent } from '@components/car-input/car-input.component';
import { CarFilterPipe } from '@pipes/car-filter.pipe';
import { HeaderComponent } from '@components/header/header.component';
import { BasketComponent } from '@components/basket/basket.component';
import { RegistrationComponent } from '@components/registration/registration.component';


// Addons
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Router
import { AppRoutingModule } from '@app/modules/appRouting/app.routing.module';
import { CarShowComponent } from '@components/car-show/car-show.component';
import { AuthGuardService } from '@services/guard/auth.guard.service';



@NgModule({
  declarations: [
    // Components
    AppComponent,
    CarListComponent,
    CarItemComponent,
    CarInputComponent,
    HeaderComponent,
    BasketComponent,
    RegistrationComponent,
    // Pipes
    CarFilterPipe,
    CarShowComponent,
  ],
  imports: [
    AppRoutingModule, // Router
    BrowserModule,
    HttpClientModule,
    FormsModule,         // Шаблонный подход для работы с формами
    ReactiveFormsModule, // Реактивный подход для работы с форами
    AngularFontAwesomeModule
  ],
  providers: [
    AuthGuardService, // Посредник для проверки авторизации
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
