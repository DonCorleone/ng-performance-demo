import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

// import { FlightBookingModule } from './flight-booking/flight-booking.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES, {
      // useHash: true,
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }),
    NgOptimizedImage
  ],
  providers: [provideImageKitLoader('https://ik.imagekit.io/LXT'), provideClientHydration()],
  declarations: [AppComponent, SidebarComponent, NavbarComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
