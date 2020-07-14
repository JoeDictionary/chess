import { BOARD_SIZE, EMPTY } from './chessBoard';
import { move, loop, board } from './declarations';
import {
  vertDiagMoves,
  rookMoves,
  bishopMoves,
  knightMoveOffsets,
  isOutOfBounds,
  offsetMoves,
  kingMoveOffsets,
} from './reusable_moves';
const IMG_SIZE = '80px';

export class Piece {
  x: number;
  y: number;
  isWhite: boolean;
  hasMoved: boolean;
  availableMoves: move[];

  imgPath: string;
  domElement: HTMLImageElement;

  constructor(y: number, x: number, isWhite: boolean = true, image: String) {
    this.y = y;
    this.x = x;
    this.isWhite = isWhite;
    this.hasMoved = false;
    this.availableMoves = [];

    this.imgPath = this.isWhite
      ? `./chess_img/w${image}`
      : `./chess_img/b${image}`;
    this.domElement = document.createElement('img');
    this.domElement.className = 'piece';
    this.domElement.src = this.imgPath;
    this.domElement.id = `${this.y},${this.x}`;

    this.domElement.addEventListener('dragstart', this.dragStart);
    this.domElement.addEventListener('dragend', this.dragEnd);
  }

  move(y: number, x: number) {
    this.y = y;
    this.x = x;
		this.domElement.id = ` ${y},${x}`;
		this.hasMoved = true;
  }

  isEnemy(p: Piece | undefined) {
    return p ? !(p.isWhite === this.isWhite) : false;
  }

  changePos(pos: [number, number]) {
    this.x, (this.y = pos[0]), pos[1];
  }

  // TODO Prevent ghost image on dragging.
  dragStart = (e: DragEvent) => {
    let target = e.target as HTMLElement;
    target.className += ' hold';
    setTimeout(() => (target.className += ' invisible'), 0);
    e.dataTransfer!.setData('text', this.domElement.id);
  };

  dragEnd = (e: DragEvent) => {
    (e.target as HTMLElement).className = 'piece';
  };
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

  getValidMoves(boardState: (Piece | undefined)[][]) {
    let validMoves: move[] = [];

    validMoves = vertDiagMoves(rookMoves(this), boardState);

    this.availableMoves = validMoves;
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

  getValidMoves(boardState: (Piece | undefined)[][]) {
    let validMoves: move[] = [];
    validMoves = vertDiagMoves(bishopMoves(this), boardState);

    this.availableMoves = validMoves;
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
  getValidMoves(boardState: (Piece | undefined)[][]) {
    let validMoves: move[] = [];
    validMoves = offsetMoves(knightMoveOffsets, boardState, this);

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
  getValidMoves(boardState: (Piece | undefined)[][]): move[] {
    return offsetMoves(kingMoveOffsets, boardState, this);
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
  getValidMoves(boardState: (Piece | undefined)[][]) {
    let validMoves: move[] = [];

    validMoves = validMoves.concat(
      vertDiagMoves(bishopMoves(this), boardState)
    );
    validMoves = validMoves.concat(vertDiagMoves(rookMoves(this), boardState));

    this.availableMoves = validMoves;
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
  getValidMoves(boardState: (Piece | undefined)[][]) {
    let validMoves: move[] = [];
    const yOffset = this.isWhite ? -1 : 1;

    const basicMoves: move[] = [
      { y: this.y + yOffset, x: this.x },
		];
		if (!this.hasMoved) basicMoves.push({ y: this.y + 2 * yOffset, x: this.x })
		const beatMoves: move[] = [
			{ y: this.y + yOffset, x: this.x + 1 },
      { y: this.y + yOffset, x: this.x - 1},
		]

		for (let move of basicMoves) {
			if (isOutOfBounds(move) || boardState[move.y][move.x] !== undefined) break
			validMoves.push(move)
		}
		for (let move of beatMoves) {
			if (isOutOfBounds(move) || !this.isEnemy(boardState[move.y][move.x])) continue
			validMoves.push(move)
		}

		return validMoves
  }
}
