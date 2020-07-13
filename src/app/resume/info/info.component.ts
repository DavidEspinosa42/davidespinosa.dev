import { Component, OnInit, Input } from '@angular/core';
import { InfoItems } from './info-items.interface';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
	@Input()
	public items: InfoItems;

	constructor() { }

	ngOnInit(): void {
	}

}
