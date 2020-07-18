import { Piece, Pawn, Knight, Rook, Bishop, Queen, King } from './piece';
import { move } from './declarations';

export const BOARD_SIZE = 8;
export const EMPTY = undefined;

const BACKLINE = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

export class Board {
  board: HTMLDivElement;
  boardContainer: HTMLElement;
  squareElements: HTMLDivElement[][];
  state: (Piece | undefined)[][];

  /**
   * @param boardContainer  HTMLElement to which the chessboard will be appended.
   *
   */
  constructor(boardContainer: HTMLElement) {
    this.boardContainer = boardContainer;
    // Holds each div that makes up a single square on the chessboard for later reference
    this.squareElements = Array(8)
      .fill(0)
      .map(() => new Array(8));
    this.state = Array(8)
      .fill(0)
      .map(() => new Array(8));
    // Holds the DOM-Elements making up the board. Gets appended to 'boardContainer'.
    this.board = document.createElement('div');
    let row = document.createElement('div');
    let square = document.createElement('div');

    this.board.className = 'board';
    row.className = 'row';
    square.className = 'square';

    this.board.addEventListener('dragenter', this.dragEnter);
    this.board.addEventListener('dragleave', this.dragLeave);
    this.board.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    this.board.addEventListener('drop', this.dragDrop);
    this.board.addEventListener('dragstart', this.dragStart);
    this.board.addEventListener('dragend', this.dragEnd);

    for (let y = 0; y < 8; y++) {
      let rowDiv = row.cloneNode();
      for (let x = 0; x < 8; x++) {
        let squareDiv = square.cloneNode() as HTMLDivElement;
        squareDiv.className = 'square';
        squareDiv.dataset.x = x.toString();
        squareDiv.dataset.y = y.toString();
        /* 				
        squareDiv.addEventListener('dragenter', this.dragEnter);
        squareDiv.addEventListener('dragleave', this.dragLeave);
        squareDiv.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
        squareDiv.addEventListener('drop', this.dragDrop);
 */
        rowDiv.appendChild(squareDiv);
        this.squareElements[y][x] = squareDiv;
      }
      this.board.appendChild(rowDiv);
    }
    boardContainer.appendChild(this.board);
  }

  removePiece(y: number, x: number) {
    // If not undefined in state array, remove dom element of that piece and destroy the instance by setting to indefined
    if (this.state[y][x]) {
      (this.state[y][x] as Piece).domElement.remove();
      this.state[y][x] = undefined;
    }
  }

  insertPiece(piece: Piece) {
    let x = piece.x;
    let y = piece.y;
    if (this.state[y][x] !== EMPTY) {
      this.removePiece(y, x);
    }
    this.squareElements[y][x].appendChild(piece.domElement);
    this.state[y][x] = piece;
  }

  movePiece(p: Piece, toY: number, toX: number) {
    if (!this.isMoveValid({ y: toY, x: toX }, p as Piece)) return;

    const [fromY, fromX] = [p.y, p.x];
    // Removes piece on target square.
    this.removePiece(toY, toX);

    // Change moved piece's internal state.
    p.move(toY, toX);

    // Move piece in state array to new location by first copying piece to new location and deleting it in the old location.
    this.state[toY][toX] = this.state[fromY][fromX];
    this.state[fromY][fromX] = undefined;

    // Append domElement of moved piece to target square.
    this.squareElements[toY][toX].appendChild(p.domElement as HTMLImageElement);
  }

  initPieces() {
    // TODO Can i even do this?
    // this.constructor(this.boardContainer)

    for (let x = 0; x < 8; x++) {
      const backY = 0;
      const frontY = 1;
      let nonPawn = new BACKLINE[x](backY, x, false);
      let pawn = new Pawn(frontY, x, false);
      this.state[backY][x] = nonPawn;
      this.state[frontY][x] = pawn;
      this.squareElements[backY][x].appendChild(nonPawn.domElement);
      this.squareElements[frontY][x].appendChild(pawn.domElement);
    }

    for (let x = 0; x < 8; x++) {
      const backY = 7;
      const frontY = 6;
      let nonPawn = new BACKLINE[x](backY, x);
      let pawn = new Pawn(frontY, x);
      this.state[backY][x] = nonPawn;
      this.state[frontY][x] = pawn;
      this.squareElements[backY][x].appendChild(nonPawn.domElement);
      this.squareElements[frontY][x].appendChild(pawn.domElement);
    }
  }

  isMoveValid({ y, x }: move, piece: Piece) {
    const validPieceMoves = piece.getValidMoves(this.state);
    for (let move of validPieceMoves) {
      if (move.y === y && move.x === x) return true;
    }
    return false;
  }

  // TODO Prevent ghost image on dragging.
  // TODO Transfer dragStart and dragEnd to Board???
  dragStart = (e: DragEvent) => {
    const target = e.target as HTMLImageElement;
		if (!target.className.includes('piece')) return;
		
    const piece = this.getPiecefromEL(target) as Piece
		this.highlightValidMoves(piece as Piece);
    target.className += ' hold';
    e.dataTransfer!.setData('text', [piece.y, piece.x].join(','));
    setTimeout(() => (target.className += ' invisible'), 0);
  };

  dragEnd = (e: DragEvent) => {
    const target = e.target as HTMLImageElement;
		if (!target.className.includes('piece')) return;
		this.highlightValidMoves(this.getPiecefromEL(target) as Piece, false);
    (e.target as HTMLImageElement).className = 'piece';
  };

  dragEnter(e: DragEvent) {
    e.preventDefault();
    let target = e.target as HTMLElement;
    if (target.className.includes('square')) {
      target.className += ' hovered';
    }
  }

  dragLeave(e: DragEvent) {
    let target = e.target as HTMLElement;
    if (target.className.includes('square')) {
      target.className = 'square';
    }
  }

  // TODO What does e.preventDefault() exactly do?
  dragDrop = (e: DragEvent) => {
    const tgt = e.target as HTMLElement;
    // Retrieve target-square-coords from data-attributes.
    const [tgtY, tgtX] = [parseInt(tgt.dataset.y!), parseInt(tgt.dataset.x!)];
    // Retrieve dropped-piece-coords from the drag-dataTransfer payload
    const [drpY, drpX] = e
      .dataTransfer!.getData('text')!
      .split(',')
      .map((x) => parseInt(x));
    const drpPiece = this.state[drpY][drpX] as Piece; // dropped Piece class instance.

    // TODO Is it beneficial to have this here?
    /*
		if (!tgt.className.includes('piece') && !tgt.className.includes('square'))
			return;
			*/

    // Revert square-style to square to remove drag-hover highlight.
    if (tgt.className.includes('square')) tgt.className = 'square';

    this.movePiece(drpPiece, tgtY, tgtX);
  };

  highlightValidMoves(p: Piece, highlight = true) {
    if (highlight)
      for (let m of p.getValidMoves(this.state)) {
        this.squareElements[m.y][m.x].className += ' available';
      }
    else
      for (let m of p.validMoveCache) {
        this.squareElements[m.y][m.x].className = 'square';
      }
	}
	
	getPiecefromEL(pieceEl: HTMLImageElement) {
		const [y, x] = [pieceEl.dataset.y, pieceEl.dataset.x].map(x => parseInt(x!))
		return this.state[y][x]
	}
}
