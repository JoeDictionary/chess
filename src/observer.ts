import { coord } from './declarations';

export class Observer {
	fun: Function;

	constructor(f: Function) {
		this.fun = f
	}

	update(p: coord, to: coord) {
		this.fun(p, to);
	}
}