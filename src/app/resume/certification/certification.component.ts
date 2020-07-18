import { Component, OnInit, Input } from '@angular/core';
import { CertificationItems } from './certification-items.interface';

@Component({
	selector: 'app-certification',
	templateUrl: './certification.component.html',
	styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
	@Input()
	public items: CertificationItems;

	constructor() { }

	ngOnInit(): void {
	}

}
