import { Observer } from './observer';
import { BoardState, coord, move } from './declarations';
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
  pieces: Piece[]; // REVIEW Will I need this?
  whiteTurn = true;

  constructor($boardContainer: HTMLElement) {
    this.logic = new ChessBoard();
    this.dom = new ChessBoardDOM($boardContainer);
    this.state = this.logic.state;
    this.pieces = this.initGame();

    let dropObserver = new Observer(({ p, to }: move) => {
      this.movePiece(p, to);
    });

    let dragStartObserver = new Observer( (p: coord) => {
			this.highlightValidMoves(p);
		})

		this.dom.dropSub.attach(dropObserver);
		this.dom.dragStartSub.attach(dragStartObserver);
  }

  movePiece(p: coord, to: coord) {
    let piece = this.state[p.y][p.x]!;
    if (!this.logic.isMoveValid(piece, to) || this.whiteTurn !== piece.isWhite)
      return; // If move is invalid don't move

    this.whiteTurn = !this.whiteTurn;
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

  highlightValidMoves({ y, x }: coord) {
		const p = this.state[y][x];
		if (p instanceof Piece){
			const moves = p.getValidMoves(this.state);
			for (let m of moves) {
				this.dom.highlightSq(this.dom.$squares[m.y][m.x])
			}
		}
  }
}
