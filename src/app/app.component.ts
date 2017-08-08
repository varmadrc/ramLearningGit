import { Component } from '@angular/core';

export class Charecter {
  	id: number;
  	name: string;
}

const HEROES: Charecter[] = [
  	{ id: 1, name: 'Mr. Nice' },
  	{ id: 2, name: 'Narco' },
  	{ id: 3, name: 'Bombasto' },
  	{ id: 4, name: 'Celeritas' },
	{ id: 5, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

const villians: Charecter[] = [
  	{ id: 11, name: 'Mr. Nice' },
  	{ id: 12, name: 'Narco' },
  	{ id: 13, name: 'Bombasto' },
  	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 6, name: 'RubberMan' },
	{ id: 7, name: 'Dynama' },
	{ id: 8, name: 'Dr IQ' },
	{ id: 9, name: 'Magma' },
	{ id: 10, name: 'Tornado' }
];

@Component({
  	selector: 'app-root',
  	template: `
    	<h1>{{title}}</h1>
	    <h2>Characters</h2>
	    <ul class="chars">
			<div *ngFor="let char of chars">
				<li *ngIf="char.id > 10">
	        		<button class="btn btn-primary" (click)="onSelect(char)">{{char.id}}</button> {{char.name}}
	      		</li>
	      	</div>
	    </ul>
	  	<alert type="success">
		  	<div *ngIf="selectedChar">
		      <h2>{{selectedChar.name}} details!</h2>
		      <div><label>id: </label>{{selectedChar.id}}</div>
		      <div>
		        <label>name: </label>
		        <input [(ngModel)] = "selectedChar.name" placeholder="name"/>
		      </div>
		    </div>
		</alert>`,
  	//templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Welcome to the site';
  	chars = HEROES;
  	selectedChar: Charecter;

  	onSelect(charecter: Charecter): void {
    	this.selectedChar = charecter;
  	}
}
