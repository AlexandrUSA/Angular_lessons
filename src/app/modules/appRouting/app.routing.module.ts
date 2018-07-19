import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from '@components/registration/registration.component';
import { CarListComponent } from '@components/car-list/car-list.component';
import { CarShowComponent } from '@components/car-show/car-show.component';
import { AuthGuardService } from '@services/guard/auth.guard.service';

const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'cars/:id',
    component: CarShowComponent
  },
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
