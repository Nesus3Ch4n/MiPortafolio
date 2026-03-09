import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  
  // Datos para el menú de navegación
  navItems = [
    { path: '/', label: 'Inicio', icon: '🏠' },
    { path: '/proyectos', label: 'Proyectos', icon: '💼' },
    { path: '/sobre-mi', label: 'Sobre mí', icon: '👤' },
    { path: '/contacto', label: 'Contacto', icon: '📧' }
  ];
  
  // Método para alternar menú móvil
  isMobileMenuOpen = false;
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}