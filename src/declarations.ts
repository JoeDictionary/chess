import { Pawn, Knight, Rook, Bishop, Queen, King, Piece } from './piece';

export type board = (Piece | undefined)[][]

export interface move {
	y: number,
	x: number
}

export interface loop {
	yStart: number;
	xStart: number;
	isWhite: boolean
  compare: Function;
	modifyY: boolean,
  modifyX: boolean
  yIncrement?: boolean;
	xIncrement?: boolean;
}