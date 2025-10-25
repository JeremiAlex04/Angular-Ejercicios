import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'PruebadirectivasAtributos';
  activeClass: string = 'Primario';
  fontSize: number = 16;

  setActiveClass(className: string){
    this.activeClass = className;
  }

  increaseFontSize(){
    this.fontSize += 2;
  }

}
