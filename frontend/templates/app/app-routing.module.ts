import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ChoosKindComponent } from './ChoosKind/ChoosKind.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  // {path : "" , component  : AppComponent } ,
  {
    path: 'create',
    component: SigninComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path : 'Me/:num' ,
    component: MapComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
