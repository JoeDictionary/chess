from piece import Rook
from piece import Knight
from piece import Bishop
from piece import Queen
from piece import King
from piece import Pawn
from os import system

BOARD_SIZE = 8
PAWN = 'P'
HORSE = 'H'
BISHOP = 'B'
ROOK = 'R'
QUEEN = 'Q'
KING = 'K'

EMPTY_SQUARE = ' '

FRONTLINE = [PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN]
BACKLINE = [ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK]

class Board():
	def __init__(self):
		self.state = [[EMPTY_SQUARE for y in range(BOARD_SIZE)] for x in range(BOARD_SIZE)]
		self.white_pieces = ROOK + HORSE + BISHOP + QUEEN + KING + PAWN
		self.black_pieces = self.white_pieces.lower()
		# White
		self.state[0] = [Rook(0, 0), Knight(0, 1), Bishop(0, 2), Queen(0, 3), King(0, 4), Bishop(0, 5), Knight(0, 6), Rook(0, 7)]
		self.state[1] = [Pawn(1, 0), Pawn(1, 1), Pawn(1, 2), Pawn(1, 3), Pawn(1, 4), Pawn(1, 5), Pawn(1, 6), Pawn(1, 7)]
		# Black
		self.state[6] = [Pawn(7, 0, False), Pawn(7, 1, False), Pawn(7, 2, False), Pawn(7, 3, False), Pawn(7, 4, False), Pawn(7, 5, False), Pawn(7, 6, False), Pawn(7, 7, False)]
		self.state[7] = [Rook(6, 0, False), Knight(6, 1, False), Bishop(6, 2, False), Queen(6, 3, False), King(6, 4, False), Bishop(6, 5, False), Knight(6, 6, False), Rook(6, 7, False)]

	def __str__(self):
		printable = ' '
		horizontal_line = ''.join([' - -' for _ in range(BOARD_SIZE)]) + ' -\n'

		# Prints Letters on top of board
		# TODO revert to non-dev mode
		""" for letter_num in range(ord('a'), ord('h')+1):
			printable += '   ' + chr(letter_num) """
		for num in range(0, BOARD_SIZE):
			printable += '   ' + str(num)

		# Prints horizontal_line on top of board
		printable += '\n ' + horizontal_line
		# Prints board spaces
		for index, y in enumerate(self.state):
			# TODO Revert to non-dev mode
			""" printable += str(index + 1) """
			printable += str(index)
			for x in y:
				# Prints vertical lines between spaces
				printable += ' | ' + str(x)
			# Prints last column of vertical lines
			printable += ' |\n ' + horizontal_line
		return printable

	def is_white(self, piece):
		return piece in self.white_pieces
	
	def to_coord(self, chess_notation):
		x = ord(chess_notation[0]) - ord('a')
		y = chess_notation[1]-1
		return (y, x)
	
	def to_chess_notation(self, coords):
		letter = chr(coords[1] + ord('a'))
		number = coords[0] + 1
		return (letter, number)

	def move(self, current, target):
		""" Moves a piece at 'current' to 'target' if allowed. """
		# y_current, x_current = self.to_coord(current)
		# y_target, x_target = self.to_coord(target)

		# current_square = self.state[y_current][x_current]
		# target_square = self.state[y_target][x_target]

		# if (y_target, x_target) in self.possible_moves((y_current, x_current)):
		# 	# TODO Figure out how to move piece without destroyig´ng it
		# 	self.state[y_current][x_current] = EMPTY_SQUARE
		# 	self.state[y_target][x_target] = current_square
		# else: print("MOVE: INVALID MOVE!")

		y_current, x_current = current
		y_target, x_target = target
		valid_moves = self.state[y_current][x_current].valid_moves(self.state)
		# print(valid_moves)

		if target in valid_moves:
			self.state[y_current][x_current].change_pos((y_target, x_target))
			self.state[y_target][x_target] = self.state[y_current][x_current]
			self.state[y_target][x_target].has_moved = True
			self.state[y_current][x_current] = EMPTY_SQUARE
		else: print("INVALID MOVE")

	def possible_moves(self, pos):
		y_pos, x_pos = pos
		piece_is_white = self.is_white(self.state[y_pos][x_pos])

		# Cannot move empty position; return False
		if self.state[y_pos][x_pos] == ' ':
			return False

		possible_moves = []
		# Calculates possible vertical Rook moves
		y_ranges = [range(y_pos+1, BOARD_SIZE), range(y_pos-1, -1, -1)]
		for r in y_ranges:
			for new_y in r:
				if self.state[new_y][x_pos] != ' ':
					if self.is_white(self.state[new_y][x_pos]) == piece_is_white:
						break
					else:
						possible_moves.append((new_y, x_pos))
						break
				else: possible_moves.append((new_y, x_pos))

		# Calculates possible horizontal Rook moves
		x_ranges = [range(x_pos+1, BOARD_SIZE), range(x_pos-1, -1)]
		for r in x_ranges:
			for new_x in r:
				if self.state[y_pos][new_x] != ' ':
					if self.is_white(self.state[y_pos][new_x]) == piece_is_white:
						break
					else:
						possible_moves.append((y_pos, new_x))
						break
				else: possible_moves.append((y_pos, new_x))

		print(possible_moves)
		return possible_moves



board = Board()
system('clear')

board.move((1, 0), (3, 0))
board.move((3, 0), (4, 0))
board.move((4, 0), (5, 0))

print(board.state[5][0].valid_moves(board.state))

print(board)
