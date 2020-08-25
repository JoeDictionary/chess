import { Board } from './../old_code/chessBoardModel';
import { BoardState, coord } from './declarations';
import { Piece, Rook, Knight, Bishop, Queen, King, Pawn } from './piece';

export const BOARD_SIZE = 8;
export const EMPTY = undefined;
const BACKLINE = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

// TODO Should data for the piece's image be stored here, in Piece class or somewhere else?

export class ChessBoard {
  state: BoardState;

  constructor() {
    this.state = Array(8)
      .fill(0)
      .map(() => new Array(8));
  }

  removePiece({ y, x }: coord) {
    if (this.state[y][x] instanceof Piece) {
      this.state[y][x] = undefined;
    }
  }

  insertPiece(p: Piece) {
    const [y, x] = [p.y, p.x];
    this.removePiece({ y: y, x: x });
    this.state[y][x] = p;
  }

  movePiece(from: coord, to: coord) {
    let p = this.state[from.y][from.x]!;
    p.hasMoved = true;
    this.state[to.y][to.x] = this.state[from.y][from.x];
    this.removePiece({ y: from.y, x: from.x });
    p.move(to.y, to.x);
  }

  // REVIEW Move this to chessGame?
  initGame() {
    for (let i = 0; i < BOARD_SIZE; i++) {
      this.insertPiece(new BACKLINE[i](0, i, false)); // black backline
      this.insertPiece(new BACKLINE[i](7, i, true)); // white backline
      this.insertPiece(new Pawn(1, i, false)); // black pawns
      this.insertPiece(new Pawn(6, i, true)); // white pawns
    }
  }

  isMoveValid(p: coord, to: coord) {
    if (!(this.state[p.y][p.x] instanceof Piece)) return false; // False if there is no piece
    const piece = this.state[p.y][p.x]!;
		const validPieceMoves = piece.getValidMoves(this.state);
		
    for (let m of validPieceMoves) {
      if (m.y === to.y && m.x === to.x) return true;
    }
    return false;
  }
}
