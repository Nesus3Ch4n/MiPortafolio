import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Propiedades para proyectos dinámicos (luego las llenaremos con datos reales)
  projects = [
    {
      id: 1,
      title: 'Portafolio Angular',
      description: 'Portafolio personal desarrollado con Angular 17+',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      image: '📱',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce React',
      description: 'Tienda online completa con carrito de compras',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Panel de control con gráficos en tiempo real',
      technologies: ['Vue.js', 'Chart.js', 'Firebase'],
      image: '📊',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];
}