import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
usuarios: { nombre: string, apellido: string, edad: number,correo: string }[] = [];

  nuevousuario = { nombre: '', apellido: '',edad: 0, correo: '' }



  registrar() {
    if (this.nuevousuario.nombre.trim() && this.nuevousuario.apellido.trim() && this.nuevousuario.edad &&this.nuevousuario.correo.trim()) {
      this.usuarios.push({ ...this.nuevousuario })
      this.nuevousuario = { nombre: '', apellido: '',edad: 0, correo: '' }
    }
  }

  eliminar(i: number) {
    this.usuarios.splice(i, 1);
  }

  limpiar (){
  this.nuevousuario = {
    nombre: '',
    apellido: '',
    edad: 0,
    correo: ''
  }
  }

  
  indiceuser: number | null = null;

  actualizar(i: number) {
    if (this.indiceuser === null) {
      
      this.nuevousuario = { ...this.usuarios[i] };
      this.indiceuser = i;
    } else {
      
      this.usuarios[this.indiceuser] = { ...this.nuevousuario };
      this.nuevousuario = { nombre: '', apellido: '',edad: 0, correo: '' };
      this.indiceuser = null;
    }
  }

}
