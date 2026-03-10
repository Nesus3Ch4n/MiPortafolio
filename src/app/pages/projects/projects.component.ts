import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectDemo {
  summary: string;
  details: string;
  images: string[]; // rutas relativas en assets o URLs completas
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  demo?: ProjectDemo;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Proyectos configurables: aquí puedes adaptar fácilmente la info y las imágenes del modal
  projects: Project[] = [
    {
      id: 1,
      title: 'Proyecto Generacion Numeros Aleatorios',
      description: 'Proyecto de generacion de numeros aleatorios con Angular 17+ y FastAPI.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'FastAPI', 'Oracle'],
      image: '/assets/images/gna/gna.png',
      liveUrl: 'https://github.com/Nesus3Ch4n/proyecto-gna-frontend',
      demo: {
        summary: 'Generacion de numeros aleatorios.',
        details:
          'Este proyecto muestra mi experiencia en Angular, diseño responsive y optimización de rendimiento para un proceso de generacion de numeros aleatorios, realizado en las practicas empresariales de la universidad Santiago de Cali.',
        images: [
          '/assets/images/gna/gna-login.png',
          '/assets/images/gna/gna-register.png',
          '/assets/images/gna/gna-home.png',
          '/assets/images/gna/gna-numbers.png',
          '/assets/images/gna/gna.png',
          '/assets/images/gna/gna-audit.png',
          '/assets/images/gna/gna-roles.png',
        ]
      }
    },
    {
      id: 2,
      title: 'E-commerce React',
      description: 'Tienda online completa con carrito de compras.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      liveUrl: '#',
      githubUrl: '#'
      // Puedes añadir demo aquí cuando tengas capturas:
      // demo: { summary: '...', details: '...', images: ['...'] }
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Panel de control con gráficos en tiempo real.',
      technologies: ['Vue.js', 'Chart.js', 'Firebase'],
      image: '📊',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  selectedProject: Project | null = null;

  openDemo(project: Project): void {
    if (!project.demo) {
      return;
    }
    this.selectedProject = project;
  }

  closeDemo(): void {
    this.selectedProject = null;
  }

  esRutaImagen(valor: string): boolean {
    return valor.endsWith('.png') || valor.endsWith('.jpg') || valor.startsWith('http');
  }
}