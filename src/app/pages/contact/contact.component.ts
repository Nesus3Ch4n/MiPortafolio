import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';
  
  contactInfo = {
    email: 'tuemail@ejemplo.com',
    linkedin: 'linkedin.com/in/tuperfil',
    github: 'github.com/tuusuario',
    location: 'Ciudad, País'
  };
  
  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';
    
    // Simulación de envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = '¡Mensaje enviado correctamente! Te responderé en breve.';
      
      // Resetear formulario
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 1500);
  }
}