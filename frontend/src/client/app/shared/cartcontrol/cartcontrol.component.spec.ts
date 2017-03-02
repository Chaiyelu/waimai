import { TestBed, inject } from '@angular/core/testing';

import { CartcontrolComponent } from './cartcontrol.component';

describe('a cartcontrol component', () => {
	let component: CartcontrolComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CartcontrolComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CartcontrolComponent], (CartcontrolComponent) => {
		component = CartcontrolComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});