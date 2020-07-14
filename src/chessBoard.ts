import { Piece, Pawn, Knight, Rook, Bishop, Queen, King } from './piece';
import { move, subPiece } from './declarations';

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

    for (let y = 0; y < 8; y++) {
      let rowDiv = row.cloneNode();
      for (let x = 0; x < 8; x++) {
        let squareDiv = square.cloneNode() as HTMLDivElement;
        squareDiv.className = 'square';
        squareDiv.dataset.x = x.toString();
        squareDiv.dataset.y = y.toString();
        squareDiv.addEventListener('dragenter', this.dragEnter);
        squareDiv.addEventListener('dragleave', this.dragLeave);
        squareDiv.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
        squareDiv.addEventListener('drop', this.dragDrop);

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

  movePiece(fromY: number, fromX: number, toY: number, toX: number) {
    // Removes piece on target square.
    this.removePiece(toY, toX);

    // Change moved piece's internal state.
    this.state[fromY][fromX]?.move(toY, toX);

    // Move piece in state array to new location by first copying piece to new location and deleting it in the old location.
    this.state[toY][toX] = this.state[fromY][fromX];
    this.state[fromY][fromX] = undefined;

    // Append domElement of moved piece to target square.
    this.squareElements[toY][toX].appendChild(
      this.state[toY][toX]?.domElement as Node
    );
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

  checkMoveValidity(y: number, x: number, piece: subPiece) {
		const validPieceMoves = piece.getValidMoves(this.state);
		if (!validPieceMoves) return false;

    for (let move of validPieceMoves) {
      if (move.y === y && move.x === x) return true;
    }
    return false;
  }

  dragEnter(e: DragEvent) {
    e.preventDefault();
    let targetClass = (e.target as HTMLElement).className;
    if (targetClass === 'square') {
      (e.target as HTMLElement).className += ' hovered';
    }
  }

  dragLeave(e: DragEvent) {
    let target = e.target as HTMLElement;
    if (target.className.includes('square')) {
      (e.target as HTMLElement).className = 'square';
    }
  }

  // TODO Make squares have coordinate-IDSs instead of data attributes
  // TODO What does e.preventDefault() exactly do?
  dragDrop = (e: DragEvent) => {
    const target = e.target as HTMLElement;
    const droppedEl = document.getElementById(e.dataTransfer?.getData('text')!);
    // Drop target coords
    let trgtY!: number;
    let trgtX!: number;

    // Gets coordinates of target square. Differentiates between
    if (target.className.includes('piece')) {
      [trgtY, trgtX] = target.id.split(',').map((x) => parseInt(x));
    } else if (target.className.includes('square')) {
      target.className = 'square';
      // Retrieve coords of target square from data-attributes.
      trgtY = parseInt(target.dataset.y!);
      trgtX = parseInt(target.dataset.x!);
    }

    // Retrieve coords of dropped element from id.
    const [drpY, drpX] = droppedEl!.id.split(',').map((x) => parseInt(x));
    const trgtState = this.state[trgtY][trgtX];
    const drpState = this.state[drpY][drpX];

    // Cancel DnD action if target is an allied piece
    if (
      (trgtState && !drpState!.isEnemy(trgtState)) ||
      !this.checkMoveValidity(trgtY, trgtX, drpState as subPiece)
    ) {
      return;
    }

    this.movePiece(drpY, drpX, trgtY, trgtX);
  };
}
