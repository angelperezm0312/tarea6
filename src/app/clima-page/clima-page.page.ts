import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-page',
  templateUrl: './clima-page.page.html',
  styleUrls: ['./clima-page.page.scss'],
})
export class ClimaPagePage implements OnInit {


  climaData:any;
  error:boolean = false;

  weatherCode:number = 0;

  weatherCodes:any  = {
    0: "Desconocido",
    1000: "Despejado, soleado",
    1100: "Mayormente despejado",
    1101: "Parcialmente nublado",
    1102: "Mayormente nublado",
    1001: "Nublado",
    2000: "Niebla",
    2100: "Niebla ligera",
    4000: "Llovizna",
    4001: "Lluvia",
    4200: "Lluvia ligera",
    4201: "Lluvia intensa",
    5000: "Nieve",
    5001: "Ventisca",
    5100: "Nieve ligera",
    5101: "Nieve intensa",
    6000: "Llovizna helada",
    6001: "Lluvia helada",
    6200: "Lluvia helada ligera",
    6201: "Lluvia helada intensa",
    7000: "Granizo",
    7101: "Granizo intenso",
    7102: "Granizo ligero",
    8000: "Tormenta eléctrica"
  }
  

  constructor() { }

  ngOnInit() {
    this.getClima();
  }

  async getClima():Promise<void> {
    try {
      let response = await fetch('https://api.tomorrow.io/v4/weather/realtime?location=Dominican%20Republic&apikey=djRCOJ63yVAeYllXGhOfgxrOMK1lC9Bv');
      let jsonData = await response.json();
      
      this.climaData = jsonData.data.values
      this.weatherCode = this.climaData.weatherCode;

      console.log(this.climaData)

      this.error = false;
    }catch(error) {
      this.error = true;
    }


  }

}
