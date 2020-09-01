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

let wMoveCache: coord[] | undefined = undefined;
let bMoveCache: coord[] | undefined = undefined;

// TODO Change class to abstract
export abstract class Piece {
  x: number;
  y: number;
  isWhite: boolean;
  hasMoved: boolean;
  validMoveCache: coord[] | undefined;
	static enemyMoveCache = wMoveCache;

  imgPath: string;
  domElement: HTMLImageElement;

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
    this.domElement.dataset.y = this.y.toString();
    this.domElement.dataset.x = this.x.toString();
    this.domElement.dataset.type = PIECE;
  }

  abstract getValidMoves(
    boardState: BoardState,
    enPassant?: [coord, coord] | undefined,
    includeCastling?: boolean
  ): coord[];

  move({ y, x }: coord) {
    this.y = y;
    this.x = x;
    // this.domElement.id = ` ${y},${x}`;
    this.domElement.dataset.y = this.y.toString();
    this.domElement.dataset.x = this.x.toString();
    this.hasMoved = true;
    this.resetCache();
  }

  resetCache() {
    this.validMoveCache = undefined;
    Piece.enemyMoveCache = undefined;
    console.log(Piece.enemyMoveCache);
    console.log('Cache reset!');
  }

  isEnemy(p: Piece | undefined) {
    return p ? !(p.isWhite === this.isWhite) : false;
  }

  enemyValidMoves(bStat: BoardState): coord[] {
    let moves: coord[] = [];

    for (let row of bStat) {
      for (let p of row) {
        if (p instanceof Piece && this.isEnemy(p)) {
          moves = moves.concat(p.getValidMoves(bStat, undefined, false));
        }
      }
    }

    return moves;
  }

  isOcc(sq: coord, bStat: BoardState) {
    return !!bStat[sq.y][sq.x];
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

  getValidMoves(
    bStat: BoardState,
    en?: [coord, coord],
    includeCastl = true
  ): coord[] {
    let validMoves = offsetMoves(kingMoveOffsets, bStat, this);

    if (includeCastl) {
      // Prevent infinte recursive calls when checking enemy king's moves
      validMoves = validMoves.filter((x) => !this.isInCheck(x, bStat));
      validMoves = validMoves.concat(this.getCastling(bStat));
    }
    return validMoves;
  }

  getCastling(bStat: BoardState): coord[] {
    let validMoves: coord[] = [];

    if (!this.hasMoved) {
      let y = this.isWhite ? 7 : 0;
      let [lRook, rRook] = [bStat[y][0], bStat[y][7]];
      let lCastl = {
        rook: lRook!,
        fst: { y: y, x: 3 },
        snd: { y: y, x: 2 },
        trd: { y: y, x: 1 },
      };
      let rCastl = {
        rook: rRook!,
        fst: { y: y, x: 5 },
        snd: { y: y, x: 6 },
      };

      // Check whether left castle or right castle are valid
      let castlValid = [lCastl, rCastl].map((c) => {
        if (c.rook.hasMoved) return false;
        // Check if squares which would be traversed by king are occupied or in check
        for (let m of [c.fst, c.snd]) {
          // console.log(this.isInCheck(m, bStat)
          if (this.isOcc(m, bStat) || this.isInCheck(m, bStat)) {
            return false;
          }
        }
        return true;
      });
      // Check if third left-castle square is occupied (this square is not crossed by the king so it is not checked for eing in check)
      if (this.isOcc(lCastl.trd, bStat)) castlValid[0] = false;

      if (castlValid[0]) validMoves.push({ y: 7, x: 2 });
      if (castlValid[1]) validMoves.push({ y: 7, x: 6 });
      return validMoves;
    } else return [];
  }

  isInCheck(
    sq: coord = { y: this.y, x: this.x },
    boardState: BoardState
  ): boolean {
    if (!Piece.enemyMoveCache) {
      console.log('new enemyMoves');
      Piece.enemyMoveCache = this.enemyValidMoves(boardState);
    }

    for (let m of Piece.enemyMoveCache!) {
      // console.log(m, m.y === sq.y, m.x === sq.x);
      if (m.y === sq.y && m.x === sq.x) {
        return true;
      }
    }
    return false;
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
    let enSq: coord;
    let enPiece: Piece;
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

    // enPassant
    if (enPass) {
      enSq = enPass[1];
      enPiece = boardState[enPass[0].y][enPass[0].x]!;
      for (let m of beatMoves) {
        if (this.isEnemy(enPiece) && m.y === enSq.y && m.x === enSq.x)
          validMoves.push(m);
      }
    }

    this.validMoveCache = validMoves;
    return validMoves;
  }
}
