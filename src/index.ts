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

debugBtn.addEventListener('click', () => {
	console.log(game.logic.state);
});

debugBtn2.addEventListener('click', () => {});
