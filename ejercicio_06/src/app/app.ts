import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Variables principales
  pantalla: string = '0';
  operador: string = '';
  valorGuardado: number = 0;

  agregarnumero(numero: string) {
    if (this.pantalla === '0') {
      this.pantalla = numero;
    } else {
      this.pantalla += numero;
    }
  }

  limpiar() {
  this.pantalla = '0';
  this.operador = '';
  this.valorGuardado = 0;

  }

  operar(op: string) {
    this.valorGuardado = parseFloat(this.pantalla);
    this.operador = op;
    this.pantalla = '0';
  }


  calcular() {
    const valorActual = parseFloat(this.pantalla);
    switch (this.operador) {
      case '+':
        this.pantalla = (this.valorGuardado + valorActual).toString();
        break;
      case '-':
        this.pantalla = (this.valorGuardado - valorActual).toString();
        break;
      case '*':
        this.pantalla = (this.valorGuardado * valorActual).toString();
        break;
      case '/':
        this.pantalla = valorActual !== 0 ? (this.valorGuardado / valorActual).toString() : 'Error'
        break;
    }
    this.operador = '';

  }

  agregarpunto() {
    if (!this.pantalla.includes('.')) {
      this.pantalla += '.';
    }
  }




}
