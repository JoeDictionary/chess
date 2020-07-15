import { Board } from './chessBoard';
import { Rook, Bishop, Queen, King, Pawn, Piece } from './piece';
import './styles.css';

let debugBtn = document.querySelector('#debug');
let boardContainer = document.querySelector('.board-container')!;

let chessBoard = new Board(boardContainer as HTMLElement);
let king = new King(3, 0, true);
let rookie = new Rook(2, 1, true)
chessBoard.initPieces();
chessBoard.insertPiece(king);
chessBoard.insertPiece(rookie);

debugBtn?.addEventListener('click', (e) => {
	console.log(chessBoard.state)
});


















/*
let board = document.querySelector('.board')!;
let row = document.createElement('div');
let square = document.createElement('div');
row.className = 'row';
square.className = 'square empty';

for (let i = 0; i < 8; i++) {
  row.appendChild(square.cloneNode());
}
for (let i = 0; i < 8; i++) {
  board.appendChild(row.cloneNode(true));
}
*/

/*
let bishop = document.querySelector('.piece')!;
bishop.addEventListener('dragstart', dragStart);
bishop.addEventListener('dragend', dragEnd);

function dragStart(e: Event) {
  console.log(e.target);
  (e.target as HTMLElement).className += ' hold';
  setTimeout(() => ((e.target as HTMLElement).className = 'invisible'), 0);
}

function dragEnd(e: Event) {
  console.log(e);
  (e.target as HTMLElement).className = 'piece';
} */

/*
let empties = document.querySelectorAll('.empty')!;

for (const empty of empties) {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragEnter(e: Event) {
  e.preventDefault();
  this.className += ' hovered';
  // console.log('enter');
}
function dragLeave(e: Event) {
  this.className = 'empty';
  // console.log('leave');
}
function dragDrop(e: Event) {
  console.log(e);
	this.appendChild(bishop);
	this.className = 'empty'
  // console.log('drop');
}
 */

function monthDiff(d1: Date, d2 = new Date()): number {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
