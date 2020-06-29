import { BOARD_SIZE, EMPTY } from './chessBoard';

class Piece {
  y: number;
  x: number;
  isWhite: boolean;
  hasMoved = false;

  constructor(row: number, column: number, isWhite: boolean = true) {
    this.x = column;
    this.y = row;
    this.isWhite = isWhite;
  }

  changePos(pos: [number, number]) {
		this.x, this.y = pos[0], pos[1];	
	}
}

class Rook extends Piece {
	constructor(row: number, column: number, isWhite: boolean = true) {
		super(row, column, isWhite);	
	}

	validMoves(boardState: (Piece | string)[]) {
		
	}
}
