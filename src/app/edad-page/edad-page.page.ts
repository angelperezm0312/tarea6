import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad-page',
  templateUrl: './edad-page.page.html',
  styleUrls: ['./edad-page.page.scss'],
})
export class EdadPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string = "";
  edad:number = 0;

  texto:string = ""

  async getEdad() {
    if (this.nombre != "") {
      let response = await fetch(`https://api.agify.io/?name=${this.nombre}`);
      let jsonData = await response.json();
      this.edad = jsonData.age;
      
      this.edadToTexto();

    }else {
      this.texto = "Error: Ingrese un nombre por favor.";
    }
  }

  edadToTexto() {
    if (this.edad >= 0 && this.edad < 14) {
      this.texto = `${this.nombre} es un niño/a de ${this.edad} años de edad`;
    }else if (this.edad < 27) {
      this.texto = `${this.nombre} es un joven de ${this.edad} años de edad`;
    }else if (this.edad < 60) {
      this.texto = `${this.nombre} es un adulto de ${this.edad} años de edad`;
    }else {
      this.texto = `${this.nombre} es un anciano/a de ${this.edad} años de edad`;
    }
  }

}
