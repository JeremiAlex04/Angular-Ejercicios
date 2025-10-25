import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  productos: {nombre: string, categoria: string, precio:number, stock: number} [] = [];
  
  nuevo = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0
  }


  agregarproducto(){
  if (this.nuevo.nombre.trim() && this.nuevo.categoria.trim() && this.nuevo.precio && this.nuevo.stock) {
    this.productos.push({...this.nuevo})
    this.nuevo = {
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0
    }
  }

  }

  eliminarproducto(i: number){
    this.productos.splice(i,1);
  }
}
