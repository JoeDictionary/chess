import { Pawn, Knight, Rook, Bishop, Queen, King, Piece } from './piece';

export const SQUARE = 'square';
export const PIECE = 'piece';

export type Square = Piece | undefined;
export type BoardState = Square[][];

export interface coord {
  y: number;
  x: number;
}

export interface move {
  p: coord;
  to: coord;
}

export interface loop {
  yStart: number;
  xStart: number;
  isWhite: boolean;
  compare: Function;
  modifyY: boolean;
  modifyX: boolean;
  yIncrement?: boolean;
  xIncrement?: boolean;
}
