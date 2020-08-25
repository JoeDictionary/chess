import { Observer } from './observer';
import { BoardState, coord } from './declarations';
import { ChessBoard, BOARD_SIZE } from './LOGICchessBoard';
import { ChessBoardDOM } from './DOMchessBoard';
import { Piece, Rook, Knight, Bishop, Queen, King, Pawn } from './piece';

const BACKLINE = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

// TODO Somehow check sync of LOGIC and DOM

export class chessGame {
  logic: ChessBoard;
  dom: ChessBoardDOM;
  state: BoardState;
  // $state: HTMLDivElement[][];
  pieces: Piece[];

  constructor($boardContainer: HTMLElement) {
    let moveObserver = new Observer((p: coord, to: coord) => this.movePiece(p, to));
    this.logic = new ChessBoard();
    this.dom = new ChessBoardDOM($boardContainer, [moveObserver]);
    this.state = this.logic.state;
    // this.$state = this.$board.$squares;
    this.pieces = this.initGame();
  }

  movePiece(p: coord, to: coord) {
    let piece = this.state[p.y][p.x]!;
    if (!this.logic.isMoveValid(piece, to)) return; // If move is invalid don't move

    this.logic.movePiece(p, to);
    this.dom.movePiece(p, to);
  }

  removePiece(m: coord) {
    this.logic.removePiece(m);
    this.dom.removePiece(m);
  }

  initGame(): Piece[] {
    let pieces = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      pieces.push(new BACKLINE[i](0, i, false)); // black
      pieces.push(new BACKLINE[i](7, i, true)); // white
      pieces.push(new Pawn(1, i, false)); // black pawns
      pieces.push(new Pawn(6, i, true)); // white pawns
    }

    for (let p of pieces) {
      this.logic.insertPiece(p);
      this.dom.insertPiece(p);
    }

    return pieces;
  }

  wipeBoard(): void {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        this.logic.removePiece({ y: y, x: x });
        this.dom.removePiece({ y: y, x: x });
      }
    }
  }
}
