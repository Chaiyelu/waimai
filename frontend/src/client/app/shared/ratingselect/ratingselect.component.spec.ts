import { TestBed, inject } from '@angular/core/testing';

import { RatingselectComponent } from './ratingselect.component';

describe('a ratingselect component', () => {
	let component: RatingselectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RatingselectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RatingselectComponent], (RatingselectComponent) => {
		component = RatingselectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});