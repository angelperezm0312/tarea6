import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero-page',
  templateUrl: './genero-page.page.html',
  styleUrls: ['./genero-page.page.scss'],
})
export class GeneroPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:any = "";
  genero = null;

  error:boolean = false;
  cargar:boolean = false;


  async getEdad() {
    if (this.nombre != "") {

      try {
        let response = await fetch(`https://api.genderize.io/?name=${this.nombre}`);
        let jsonData = await response.json();
        
        console.log(jsonData)

        this.genero = jsonData.gender;

        this.error = false;
      }catch(error) {
        this.error = true; 
      }

      this.cargar = true;
    }else {
      this.error = true;
    }
  }

  
}
