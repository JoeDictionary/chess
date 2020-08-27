import { Subject } from './observer';
import { coord, SQUARE, PIECE } from './declarations';
import { BoardState } from './declarations';
import { BOARD_SIZE } from './LOGICchessBoard';
import { Piece } from './piece';

const SQ = 'board-square'; // CSS class of normal square
const HOVERED_SQ = 'hovered'; // CSS class of square hovered by a dragged item

export class ChessBoardDOM {
  $container: HTMLElement;
  $board: HTMLDivElement;
  $squares: HTMLDivElement[][] = [];
  boardState: BoardState = [];
  dropSub: Subject = new Subject();
  dragStartSub: Subject = new Subject();

  private $currDrag: HTMLImageElement | undefined = undefined;

  constructor($boardContaienr: HTMLElement) {
    this.$container = $boardContaienr;
    this.$board = this.createBoardDiv();
    this.$container.appendChild(this.$board);
    this.$board.addEventListener('dragstart', this.dragStart);
    this.$board.addEventListener('dragend', this.dragEnd);
    this.$board.addEventListener('dragenter', this.dragEnter);
    this.$board.addEventListener('dragleave', this.dragLeave);
    this.$board.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    this.$board.addEventListener('drop', this.dragDrop);
  }

  createSquareDiv(): HTMLDivElement {
    let $square = document.createElement('div');
    $square.className = 'board-square';
    $square.dataset.type = SQUARE;
    return $square;
  }

  createRowDiv(): HTMLDivElement {
    let $row = document.createElement('div');
    $row.className = 'board-row';
    return $row;
  }

  createBoardDiv(): HTMLDivElement {
    let $board = document.createElement('div');
    this.$squares = new Array(8).fill(0).map((x) => new Array(8));

    for (let y = 0; y < BOARD_SIZE; y++) {
      let $row = this.createRowDiv();
      for (let x = 0; x < BOARD_SIZE; x++) {
        const $square = this.createSquareDiv();
        $square.dataset.y = y + '';
        $square.dataset.x = x + '';
        this.$squares[y][x] = $square;
        $row.appendChild($square);
      }
      $board.appendChild($row);
    }
    return $board;
  }

  isSquare(el: HTMLElement): boolean {
    return el.dataset.type === 'square';
  }

  isPiece(el: HTMLElement): boolean {
    return el.dataset.type === PIECE;
  }

  elCoords(el: HTMLElement): { y: number; x: number } {
    return { y: parseInt(el.dataset.y!), x: parseInt(el.dataset.x!) };
  }

  getPieceImage({ y, x }: coord) {
    const children = this.$squares[y][x].children;
    if (children.length === 1) return children[0] as HTMLImageElement;
    else console.error('Number of elements on square is not 1.');
  }

  removePiece({ y, x }: coord) {
    if (this.$squares[y][x]) this.$squares[y][x].innerHTML = '';
  }

  insertPiece(p: Piece) {
    let [y, x] = [p.y, p.x];
    this.removePiece({ y: y, x: x });
    this.$squares[y][x].appendChild(p.domElement);
    p.domElement;
  }

  movePiece(p: coord, to: coord) {
    // if (p.y p.x)
    let piece = this.getPieceImage({ y: p.y, x: p.x })!;
    this.removePiece({ y: to.y, x: to.x });
    this.$squares[to.y][to.x].appendChild(piece);
    piece.dataset.y! = to.y.toString();
    piece.dataset.x! = to.x.toString();

    this.unHighlightSq(this.$squares[p.y][p.x]);
    this.unHighlightSq(this.$squares[to.y][to.x]);
  }

  dragStart = (e: DragEvent) => {
    const target = e.target as HTMLImageElement;
    this.$currDrag = target;

		if (!this.isPiece(target)) return;
		console.log(this.elCoords(this.$currDrag))
    this.dragStartSub.notify(this.elCoords(this.$currDrag));
    const { y, x } = this.elCoords(target);
  };

  // TODO Unhighlight valid moves
  dragEnd = (e: DragEvent) => {
    const target = e.target! as HTMLImageElement;
    if (!this.isPiece(target)) return; // If not a chess piece, cancel execution

    target.className = 'piece';
  };

  dragEnter = (e: DragEvent) => {
    e.preventDefault();
    let target = e.target as HTMLDivElement;
    this.highlightSq(target, HOVERED_SQ);
  };

  dragLeave = (e: DragEvent) => {
    let target = e.target as HTMLDivElement;
    this.unHighlightSq(target);
  };

  dragDrop = (e: DragEvent) => {
    const target = e.target as HTMLImageElement;
    const [tgtY, tgtX] = [
      parseInt(target.dataset.y!),
      parseInt(target.dataset.x!),
    ];
    const droppedPieceCoord = this.elCoords(this.$currDrag!);

		this.unhighlightAll();
		this.dropSub.notify({ p: droppedPieceCoord, to: { y: tgtY, x: tgtX } });
    this.$currDrag = undefined;
  };

  highlightSq(el: HTMLElement, cssClass: string = 'hovered'): void {
    let elParent = el.parentElement!;
    if (this.isSquare(el)) el.className += ' ' + cssClass;
    else if (this.isPiece(el) && this.isSquare(elParent))
      elParent.className += ' ' + cssClass;
  }

  unHighlightSq(el: HTMLElement): void {
    let elParent = el.parentElement!;
    if (this.isSquare(el)) {
      el.className = SQ;
    } else if (this.isPiece(el) && this.isSquare(elParent))
      elParent.className = SQ;
	}
	
	unhighlightAll() {
		for (let row of this.$squares) {
			for (let sq of row) {
				this.unHighlightSq(sq);
			}
		}
	}

  flipBoard() {}
}
