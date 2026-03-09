import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Inicio - Mi Portafolio',
    data: {
      breadcrumb: 'Inicio',
      description: 'Portafolio personal de desarrollo web con Angular'
    }
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects.component')
      .then(m => m.ProjectsComponent),
    title: 'Proyectos',
    data: {
      breadcrumb: 'Proyectos',
      description: 'Colección de mis proyectos de desarrollo web'
    }
  },
  {
    path: 'sobre-mi',
    loadComponent: () => import('./pages/about/about.component')
      .then(m => m.AboutComponent),
    title: 'Sobre mí',
    data: {
      breadcrumb: 'Sobre mí',
      description: 'Información sobre mi experiencia y habilidades'
    }
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent),
    title: 'Contacto',
    data: {
      breadcrumb: 'Contacto',
      description: 'Formulario de contacto para proyectos y consultas'
    }
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];