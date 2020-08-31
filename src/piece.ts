import { BOARD_SIZE, EMPTY } from './LOGICchessBoard';
import { coord, loop, BoardState, PIECE } from './declarations';
import {
  vertDiagMoves,
  rookMoves,
  bishopMoves,
  knightMoveOffsets,
  isOutOfBounds,
  offsetMoves,
  kingMoveOffsets,
} from './chessMoves';
const IMG_SIZE = '80px';

// TODO Change class to abstract
export abstract class Piece {
  x: number;
  y: number;
  isWhite: boolean;
  hasMoved: boolean;
  validMoveCache: coord[];

  imgPath: string;
  domElement: HTMLImageElement;

  abstract getValidMoves(
    boardState: BoardState,
    enPassant?: [coord, coord] | undefined
  ): coord[];

  constructor(y: number, x: number, isWhite: boolean = true, image: String) {
    this.y = y;
    this.x = x;
    this.isWhite = isWhite;
    this.hasMoved = false;
    this.validMoveCache = [];

    this.imgPath = this.isWhite
      ? `./chess_img/w${image}`
      : `./chess_img/b${image}`;
    this.domElement = document.createElement('img');
    this.domElement.className = 'piece';
    this.domElement.src = this.imgPath;
    // this.domElement.id = `${this.y},${this.x}`;
    this.domElement.dataset.y = this.y.toString();
    this.domElement.dataset.x = this.x.toString();
    this.domElement.dataset.type = PIECE;

    // this.domElement.addEventListener('dragstart', this.dragStart);
    // this.domElement.addEventListener('dragend', this.dragEnd);
  }

  move({ y, x }: coord) {
    this.y = y;
    this.x = x;
    // this.domElement.id = ` ${y},${x}`;
    this.domElement.dataset.y = this.y.toString();
    this.domElement.dataset.x = this.x.toString();
    this.hasMoved = true;
  }

  isEnemy(p: Piece | undefined) {
    return p ? !(p.isWhite === this.isWhite) : false;
  }

  changePos(pos: [number, number]) {
    this.x, (this.y = pos[0]), pos[1];
  }
}

export class Rook extends Piece {
  constructor(
    y: number,
    x: number,
    isWhite: boolean = true,
    image = '_rook.svg'
  ) {
    super(y, x, isWhite, image);
  }

  getValidMoves(boardState: BoardState): coord[] {
    let validMoves: coord[] = [];

    validMoves = vertDiagMoves(rookMoves(this), boardState);

    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class Bishop extends Piece {
  constructor(
    row: number,
    column: number,
    isWhite: boolean = true,
    image = '_bishop.svg'
  ) {
    super(row, column, isWhite, image);
  }

  getValidMoves(boardState: BoardState) {
    let validMoves: coord[] = [];
    validMoves = vertDiagMoves(bishopMoves(this), boardState);

    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class Knight extends Piece {
  constructor(
    row: number,
    column: number,
    isWhite: boolean = true,
    image = '_knight.svg'
  ) {
    super(row, column, isWhite, image);
  }
  getValidMoves(boardState: BoardState) {
    let validMoves: coord[] = [];
    validMoves = offsetMoves(knightMoveOffsets, boardState, this);

    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class King extends Piece {
  constructor(
    row: number,
    column: number,
    isWhite: boolean = true,
    image = '_king.svg'
  ) {
    super(row, column, isWhite, image);
  }
  getValidMoves(boardState: BoardState): coord[] {
    let validMoves = offsetMoves(kingMoveOffsets, boardState, this);
    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class Queen extends Piece {
  constructor(
    row: number,
    column: number,
    isWhite: boolean = true,
    image = '_queen.svg'
  ) {
    super(row, column, isWhite, image);
  }
  getValidMoves(boardState: BoardState) {
    let validMoves: coord[] = [];

    validMoves = validMoves.concat(
      vertDiagMoves(bishopMoves(this), boardState)
    );
    validMoves = validMoves.concat(vertDiagMoves(rookMoves(this), boardState));

    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class Pawn extends Piece {
  constructor(
    row: number,
    column: number,
    isWhite: boolean = true,
    image = '_pawn.svg'
  ) {
    super(row, column, isWhite, image);
  }
  // TODO Implement "en passant" and pawn promotion
  getValidMoves(boardState: BoardState, enPass: [coord, coord] | undefined) {
    let sq: coord | void;
    if (enPass) {
      sq = enPass[1];
    }
    let validMoves: coord[] = [];
    const yOffset = this.isWhite ? -1 : 1;
    let basicMoves: coord[] = [{ y: this.y + yOffset, x: this.x }];

    const beatMoves: coord[] = [
      { y: this.y + yOffset, x: this.x + 1 },
      { y: this.y + yOffset, x: this.x - 1 },
    ];

    if (!this.hasMoved) basicMoves.push({ y: this.y + 2 * yOffset, x: this.x });

    for (let m of basicMoves) {
      if (isOutOfBounds(m) || boardState[m.y][m.x] !== EMPTY) break;
      validMoves.push(m);
    }
    for (let m of beatMoves) {
			if (isOutOfBounds(m) || !this.isEnemy(boardState[m.y][m.x])) continue;
      validMoves.push(m);
		}
		if (sq) {
			for (let m of beatMoves) {
				if (m.y === sq.y && m.x === sq.x) validMoves.push(m)
			}
		}

    this.validMoveCache = validMoves;
    return validMoves;
  }
}

export class BetterPiece {}
