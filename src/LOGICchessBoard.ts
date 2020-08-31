import { Board } from './../old_code/chessBoardModel';
import { BoardState, coord } from './declarations';
import { Piece, Rook, Knight, Bishop, Queen, King, Pawn } from './piece';

export const BOARD_SIZE = 8;
export const EMPTY = undefined;
const BACKLINE = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

// TODO Should data for the piece's image be stored here, in Piece class or somewhere else?

export class ChessBoard {
  state: BoardState;
  enPassant: [coord, coord] | undefined;

  constructor() {
    this.state = Array(8)
      .fill(0)
      .map(() => new Array(8));
  }

  removePiece({ y, x }: coord) {
    let p = this.state[y][x];
    if (p instanceof Piece) {
      p.domElement.remove();
      p = undefined;
    }
  }

  insertPiece(p: Piece) {
    const [y, x] = [p.y, p.x];
    this.removePiece({ y: y, x: x });
    this.state[y][x] = p;
  }

  movePiece(p: coord, to: coord) {
    if (this.enPassant && this.enPassant[1].y === to.y && this.enPassant[1].x)
			this.removePiece({ y: this.enPassant[0].y, x: this.enPassant[0].x });

    this.enPassant = this.checkEnPassant(p, to);
    let piece = this.state[p.y][p.x]!;
    this.state[to.y][to.x] = piece;
    this.state[p.y][p.x] = undefined;
		piece.move(to);
  }

  isMoveValid(p: coord, to: coord) {
    if (!(this.state[p.y][p.x] instanceof Piece)) return false; // False if there is no piece

    const piece = this.state[p.y][p.x]!;

    let validPieceMoves = piece.getValidMoves(this.state, this.enPassant);

    for (let m of validPieceMoves) {
      if (m.y === to.y && m.x === to.x) return true;
    }
    return false;
  }

  checkEnPassant(p: coord, to: coord): [coord, coord] | undefined {
    let piece = this.state[p.y][p.x];
    if (!(piece instanceof Pawn) || piece.hasMoved) return undefined;

    const offset = piece.isWhite ? -1 : 1;

    if (Math.abs(p.y - to.y) === 2)
      return [
        { y: to.y, x: to.x },
        { y: p.y + offset, x: p.x },
      ];
    else return undefined;
  }
}
