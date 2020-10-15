import { Frame } from './Frame.js';

export class Link extends Frame {

	constructor() {

		super();
		this.isLink = true;

	}

	addChild( child ) {

		if ( ! child.isJoint ) {

			throw new Error();

		} else {

			super.addChild( child );

		}

	}

}
