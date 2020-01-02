import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  nombre:string;
  apellido:string;

  constructor(){
	  this.title = 'miApp';
	  this.nombre = 'Daniel';
	  this.apellido = 'Garcia';
  }
}
