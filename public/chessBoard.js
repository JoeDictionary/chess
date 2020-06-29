"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY = exports.BOARD_SIZE = void 0;
exports.BOARD_SIZE = 8;
exports.EMPTY = ' ';
const PAWN = 'P';
const HORSE = 'H';
const BISHOP = 'B';
const ROOK = 'R';
const QUEEN = 'Q';
const KING = 'K';
const FRONTLINE = [PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN];
const BACKLINE = [ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK];
class Board {
    constructor() { }
}
