import { Component } from '@opten/compiler/metadata/component';

@Component({ className: 'js-test' })
export class TestComponentComponent {
	constructor(private element: HTMLElement) {
		console.log('my element', element)
	}
}
