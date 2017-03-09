import { TestBed, inject } from '@angular/core/testing';

import { SplitComponent } from './split.component';

describe('a split component', () => {
	let component: SplitComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SplitComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SplitComponent], (SplitComponent) => {
		component = SplitComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});