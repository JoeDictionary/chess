import { Observer } from './observer';
import { BoardState, coord, move, chessAction } from './declarations';
import { ChessBoard, BOARD_SIZE } from './LOGICchessBoard';
import { ChessBoardDOM } from './DOMchessBoard';
import { Piece, Rook, Knight, Bishop, Queen, King, Pawn } from './piece';

const BACKLINE = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

// TODO Somehow check sync of LOGIC and DOM

export class chessGame {
  logic: ChessBoard;
  dom: ChessBoardDOM;
  state: BoardState;
  isWhiteTurn: boolean;

  promoModal: HTMLElement; // Used in pawn promotion
  promoCoord: coord = { y: -1, x: -1 }; // Used in pawn promotion

  pieces: Piece[]; // REVIEW Will I need this?

  constructor($boardContainer: HTMLElement) {
    this.logic = new ChessBoard();
    this.dom = new ChessBoardDOM($boardContainer);
    this.state = this.logic.state;
    this.isWhiteTurn = this.logic.isWhiteTurn;
    this.promoModal = document.querySelector('#promotion-modal') as HTMLElement;
    this.pieces = this.initGame();

    let promotionBtn = document
      .querySelector('#promotion-btn')
      ?.addEventListener('click', () => {
        const selected = this.promoModal.querySelector('[name]:checked')!;
        this.promotionPopup(false);
        this.promote((selected as HTMLInputElement).value);
      });

    let dropObserver = new Observer((m: move) => {
      this.turnMovePiece(m);
    });

    let dragStartObserver = new Observer((p: coord) => {
      this.highlightValidMoves(p);
    });

    let actionObserver = new Observer((a: chessAction) => {
      if (!a) return;
      console.log(a);
      if (a.move) this.movePiece(a.move);
      if (a.remove) this.removePiece(a.remove);
      if (a.promote) {
				this.promoCoord = a.promote;
        this.promotionPopup(true);
      }
    });

    this.dom.dropSub.attach(dropObserver);
    this.dom.dragStartSub.attach(dragStartObserver);
    this.logic.actionSub.attach(actionObserver);
  }

  // TODO Try to move most of it to LOGIC
  turnMovePiece({ p, to }: move) {
    let piece = this.state[p.y][p.x]!;
    if (!this.logic.turnMovePiece({ p: p, to: to })) return;

    // this.logic.movePiece(p, to);
    this.dom.movePiece({ p: p, to: to });
  }

  movePiece(m: move) {
    this.logic.movePiece(m);
    this.dom.movePiece(m);
  }

  spawnPiece(p: any, isWhite: boolean, { y, x }: coord) {
    let piece = new p(y, x, isWhite);
    this.logic.insertPiece(piece);
    this.dom.insertPiece(piece);
  }

  removePiece(m: coord) {
    this.logic.removePiece(m);
    // this.dom.emptySquare(m);
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

  // TODO Implement
  promotionPopup(show: boolean) {
    if (show) this.promoModal.style.display = 'block';
    else this.promoModal.style.display = 'none';
  }

  promote(promTo: string) {
    let { y, x } = this.promoCoord;
    let isWhite = this.logic.state[y][x]!.isWhite;
    switch (promTo) {
      case 'Queen':
        this.spawnPiece(Queen, isWhite, this.promoCoord);
        break;
      case 'Bishop':
        this.spawnPiece(Bishop, isWhite, this.promoCoord);
        break;
      case 'Rook':
        this.spawnPiece(Rook, isWhite, this.promoCoord);
        break;
    }
  }

  wipeBoard(): void {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        this.logic.removePiece({ y: y, x: x });
        this.dom.emptySquare({ y: y, x: x });
      }
    }
  }

  highlightValidMoves({ y, x }: coord) {
    const p = this.state[y][x];
    if (p instanceof Piece) {
      const moves = p.getValidMoves(this.state, this.logic.enPass);
      for (let m of moves) {
        this.dom.highlightSq(this.dom.$squares[m.to.y][m.to.x], 'valid-move');
      }
    }
  }
}
