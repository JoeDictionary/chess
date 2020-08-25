import { Pawn, Knight, Rook, Bishop, Queen, King, Piece } from './piece';

export type Square = Piece | undefined;
export type BoardState = Square[][]

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
