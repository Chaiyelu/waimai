import { TestBed, inject } from '@angular/core/testing';

import { ShopcartComponent } from './shopcart.component';

describe('a shopcart component', () => {
	let component: ShopcartComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ShopcartComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ShopcartComponent], (ShopcartComponent) => {
		component = ShopcartComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});