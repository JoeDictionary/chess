"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(row, column, isWhite = true) {
        this.hasMoved = false;
        this.x = column;
        this.y = row;
        this.isWhite = isWhite;
    }
    changePos(pos) {
        this.x, this.y = pos[0], pos[1];
    }
}
class Rook extends Piece {
    constructor(row, column, isWhite = true) {
        super(row, column, isWhite);
    }
    validMoves(boardState) {
    }
}
