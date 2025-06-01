import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '../modules/navigation/navigation.module';
import Material from '@primeng/themes/material'; // 💡 Use any other like 'lara-light-blue'
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationModule],
  providers: [
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Material,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-theme',
        },
      },
      ripple: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
