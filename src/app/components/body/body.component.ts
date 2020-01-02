import { Component } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',

})
export class BodyComponent {
	mostrar:boolean;
	frase:any;
	personajes:string[];

	constructor(){
		this.mostrar = true;
		
		this.frase = {
			mensaje: "Un gran poder requiere una gran responsabilidad.",
			autor: "Ben Parker"
		};

		this.personajes = ['Spiderman','Venom','Dr. Octopus'];
	}
}