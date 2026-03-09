// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation(), // Importante para GitHub Pages
      withViewTransitions(), // Transiciones suaves entre páginas
      withComponentInputBinding() // Permite @Input() en componentes cargados
    ),
    provideHttpClient(withFetch())
  ]
};