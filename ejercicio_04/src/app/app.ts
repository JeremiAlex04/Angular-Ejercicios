import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  busqueda = '';
  
  productos = [
    'Laptop HP - Tecnología - $1200',
    'Mouse Inalámbrico - Tecnología - $25',
    'Silla Oficina - Muebles - $150',
    'Monitor Samsung - Tecnología - $300',
    'Escritorio Madera - Muebles - $200',
    'Teclado Mecánico - Tecnología - $80',
    'Libro Angular - Libros - $35',
    'Auriculares Bluetooth - Tecnología - $60'
  ];

  get productosFiltrados() {
    if (!this.busqueda.trim()) {
      return this.productos;
    }
    
    const busquedaLower = this.busqueda.toLowerCase();
    return this.productos.filter(producto => 
      producto.toLowerCase().includes(busquedaLower)
    );
  }
}