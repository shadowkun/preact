import { createElement as h, render } from 'preact';
import { setupScratch, teardown } from '../../../test/_util/helpers';
import { useRef } from '../../src';

/** @jsx h */


describe('useRef', () => {

	/** @type {HTMLDivElement} */
	let scratch;

	beforeEach(() => {
		scratch = setupScratch();
	});

	afterEach(() => {
		teardown(scratch);
	});


	it('provides a stable reference', () => {
		const values = [];

		function Comp() {
			const ref = useRef(1);
			values.push(ref.current);
			ref.current = 2;
			return null;
		}

		render(<Comp />, scratch);
		render(<Comp />, scratch);

		expect(values).toEqual([1, 2]);
	});

});
