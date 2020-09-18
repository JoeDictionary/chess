/// <reference types="cypress" />

describe('Drag n Drop pieces', function () {
  function getSquare(y, x) {
    return cy.get(`div[data-y="${y}"][data-x="${x}"]`);
  }

  function movePiece(pY, pX, toY, toX) {
    cy.get(`img[data-y="${pY}"][data-x="${pX}"]`).as('piece');

    cy.get('@piece').trigger('dragstart');
    getSquare(toY, toX).trigger('drop');
    cy.get('@piece').trigger('dragend');
  }

  it('Moves Knight', function () {
    cy.pause();
    cy.visit('http://localhost:8080/');
		// getSquare(7, 6).as('knight');

		movePiece(7, 6, 5, 5)
		
  });
});
