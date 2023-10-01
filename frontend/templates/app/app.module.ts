
// import  angular
import { NgModule, isDevMode } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import for the browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import for styles and animations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





// import components
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ChoosKindComponent } from './ChoosKind/ChoosKind.component';
import { MapComponent } from './map/map.component';
 



@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      SigninComponent,
      ChoosKindComponent,
      MapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    BrowserAnimationsModule,





    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
