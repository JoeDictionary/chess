import { ChessBoard } from './LOGICchessBoard';
import { Rook, Bishop, Queen, King, Pawn, Piece } from './piece';
import { chessGame } from './chessGame';
import io from 'socket.io-client';
import { Socket } from 'socket.io-client';
import './styles.css';

let debugBtn = document.querySelector('#debug')!;
let debugBtn2 = document.querySelector('#debug2')!;
let boardContainer = document.querySelector('.board-container')!;

let socket = io();
let game = new chessGame(boardContainer as HTMLElement);

game.connectSocket(socket);


for (let c of [
  { y: 1, x: 3 },
  { y: 6, x: 3 },
  { y: 7, x: 3 },
  { y: 7, x: 2 },
  { y: 7, x: 1 },
  { y: 1, x: 1 },
  { y: 0, x: 1 },
]) {
  game.removePiece(c);
}


// TODO Implement real logic
debugBtn.addEventListener('click', () => {
  socket.emit('test', {
    message: 'Hellooo evernyan! How are you? Fine thsank youu!',
  });
  // game.dom.flipView();
});

debugBtn2.addEventListener('click', () => {
  console.table(game.state);
});
