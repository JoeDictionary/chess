import { Piece, Pawn } from './piece';
import { BOARD_SIZE, EMPTY } from './chessBoard';
import { move, loop, board } from './declarations';

export function vertDiagMoves(
  loops: loop[],
  boardState: board
) {
  let validMoves: move[] = [];
  let y: number;
  let x: number;

  for (let loop of loops) {
    y = loop.yStart;
    x = loop.xStart;

    for (; loop.compare(y, x); ) {
      const currY = loop.modifyY ? y : loop.yStart;
      const currX = loop.modifyX ? x : loop.xStart;
      const squareState = boardState[currY][currX];

      if (squareState === EMPTY) validMoves.push({ y: currY, x: currX });
      else if (!loop.isWhite === squareState.isWhite) {
        // TODO Consider using the classe's "this"
        validMoves.push({ y: currY, x: currX });
        break;
      } else break;

      y = loop.yIncrement ? y + 1 : y - 1;
      x = loop.xIncrement ? x + 1 : x - 1;
    }
  }
  return validMoves;
}

export function offsetMoves(offsets: { y: number; x: number }[], boardState: board, other: Piece): move[] {
	let validMoves: move[] = [];

	for (let offset of offsets) {
		const move: move = { y: other.y + offset.y, x: other.x + offset.x };

		if (other instanceof Pawn) {}
		if (isOutOfBounds(move)) continue;
		const squareState = boardState[move.y][move.x];
		if (other.isWhite === squareState?.isWhite) continue;
		validMoves.push(move);
	}
	return validMoves;
}

export function bishopMoves(other: Piece): loop[] {
  return [
    {
      // Moves in positive y positive x direction
      yStart: other.y + 1,
      xStart: other.x + 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => y < BOARD_SIZE && x < BOARD_SIZE,
      modifyY: true,
      modifyX: true,
      yIncrement: true,
      xIncrement: true,
    },
    {
      // Moves in positive y negative x direction
      yStart: other.y + 1,
      xStart: other.x - 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => y < BOARD_SIZE && x > -1,
      modifyY: true,
      modifyX: true,
      yIncrement: true,
      xIncrement: false,
    },
    {
      // Moves in negative y negative x direction
      yStart: other.y - 1,
      xStart: other.x - 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => y > -1 && x > -1,
      modifyY: true,
      modifyX: true,
      yIncrement: false,
      xIncrement: false,
    },
    {
      // Moves in negative y positive x direction
      yStart: other.y - 1,
      xStart: other.x + 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => y > -1 && x < BOARD_SIZE,
      modifyY: true,
      modifyX: true,
      yIncrement: false,
      xIncrement: true,
    },
  ];
}

export function rookMoves(other: Piece): loop[] {
  return [
    {
      yStart: other.y + 1,
      xStart: other.x,
      isWhite: other.isWhite,
      compare: (y: number, _: number) => y < BOARD_SIZE,
      modifyY: true,
      modifyX: false,
      yIncrement: true,
    },
    {
      yStart: other.y - 1,
      xStart: other.x,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => y > -1,
      modifyY: true,
      modifyX: false,
      yIncrement: false,
    },
    {
      yStart: other.y,
      xStart: other.x + 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => x < BOARD_SIZE,
      modifyY: false,
      modifyX: true,
      xIncrement: true,
    },
    {
      yStart: other.y,
      xStart: other.x - 1,
      isWhite: other.isWhite,
      compare: (y: number, x: number) => x > -1,
      modifyY: false,
      modifyX: true,
      xIncrement: false,
    },
  ];
}

export function isOutOfBounds({ y, x }: move) {
  return !(y < BOARD_SIZE && y > -1 && x < BOARD_SIZE && x > -1);
}

export const knightMoveOffsets = [
  { y: -2, x: -1 },
  { y: -2, x: 1 },
  { y: 1, x: 2 },
  { y: -1, x: 2 },
  { y: 2, x: 1 },
  { y: 2, x: -1 },
  { y: 1, x: -2 },
  { y: -1, x: -2 },
];

export const kingMoveOffsets = [
  { y: -1, x: -1 },
  { y: -1, x: 0 },
  { y: -1, x: 1 },
  { y: 0, x: -1 },
  { y: 0, x: 1 },
  { y: 1, x: -1 },
  { y: 1, x: 0 },
  { y: 1, x: 1 },
];
