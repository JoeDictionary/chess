import { ChessBoard } from './LOGICchessBoard';
import { ChessBoardDOM } from './DOMchessBoard';
import { Rook, Bishop, Queen, King, Pawn, Piece } from './piece';
import { chessGame } from './chessGame';
import './styles.css';

let debugBtn = document.querySelector('#debug')!;
let debugBtn2 = document.querySelector('#debug2')!;
let boardContainer = document.querySelector('.board-container')!;

// let $board = new ChessBoardDOM(boardContainer as HTMLElement);
// let board = new ChessBoard();

// debugBtn.addEventListener('click', () => console.log($board.$squares))

let game = new chessGame(boardContainer as HTMLElement);

let logic = new ChessBoard();

for (let c of [{y: 1, x: 3}, {y: 6, x: 3}, {y: 7, x: 3}, {y: 7, x: 2}, {y: 7, x: 1}, {y: 1, x: 1}, {y: 0, x: 1}]) {
	game.removePiece(c)
}

debugBtn.addEventListener('click', () => {
	// console.log((game.state[7][4] as King).isInCheck({y: 7, x: 3}, game.state))
});


debugBtn2.addEventListener('click', () => {
	console.table(game.state)
});
