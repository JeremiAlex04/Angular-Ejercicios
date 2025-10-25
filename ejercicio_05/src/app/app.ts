import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleados } from './models/Empleados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  //Arreglo de empleados
  empleados: empleados[] = [
    new empleados(1,"Jeremi",23)
  ];


  nombre: string = '';
  edad!: number;
  error: string = '';


  agregar() {
    if (this.nombre.trim() && this.edad) {
      this.empleados.push(new empleados(this.empleados.length + 1, this.nombre, this.edad));
      //Limpiar
      this.nombre = '';
      this.edad = 0;
    } 
    
    if (!this.nombre.trim() && !this.edad) {
        this.error = 'Cassileros en blanco';
        return;
    }
  }

}
