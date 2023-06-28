import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidad-page',
  templateUrl: './universidad-page.page.html',
  styleUrls: ['./universidad-page.page.scss'],
})
export class UniversidadPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string = "";
  universidades:Array<any> = [];
  error:boolean = false;
  errorText:string = "";
  attempts:number = 0;

  async getUniversidades():Promise<void> {
    if (this.nombre.trim().length == 0) {
      this.error = true;
      this.errorText = "Ingrese un nombre";
    }else {
      try {
        let response = await fetch(`http://universities.hipolabs.com/search?country=${this.nombre}`);
        let jsonData = await response.json();

        this.universidades = jsonData;

        this.error = false;
      } catch (error) {
        this.error = true;
        this.errorText = "Ha ocurrido un error inesperado";
        console.error(error);
      }
      this.attempts++;
    }
  }

}
