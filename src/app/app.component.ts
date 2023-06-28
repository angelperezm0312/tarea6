import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inicio', url: '/', icon: 'home'},
    { title: 'Edad', url: '/edad-page', icon: 'happy'},
    { title: 'Genero', url: '/genero-page', icon: 'male-female'},
    { title: 'Universidades', url: '/universidad-page', icon: 'school' },
    { title: 'Clima', url: '/clima-page', icon: 'rainy' },
    { title: 'Fortune news', url: '/future-new-page', icon: 'newspaper' },
    { title: 'contrateme', url: '/contrateme', icon: 'business' },
  ];
  constructor() {}
}
