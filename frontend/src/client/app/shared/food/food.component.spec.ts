import { TestBed, inject } from '@angular/core/testing';

import { FoodComponent } from './food.component';

describe('a food component', () => {
	let component: FoodComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FoodComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FoodComponent], (FoodComponent) => {
		component = FoodComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});