BOARD_SIZE = 8
EMPTY_SQUARE = ' '

class Piece():
	def __init__(self, row, column, is_white=True):
		self.char = None
		self.y = row
		self.x = column
		self.is_white = is_white
		self.has_moved = False

	def __str__(self):
	 return self.char

	def change_pos(self, pos):
		self.y, self.x = pos

class Rook(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'R' if self.is_white else 'r'

	def valid_moves(self, board_state):
		valid_moves = []

		# Calculates possible vertical Rook moves
		y_ranges = [range(self.y+1, BOARD_SIZE), range(self.y-1, -1, -1)]
		for r in y_ranges:
			for new_y in r:
				if board_state[new_y][self.x] != EMPTY_SQUARE:
					if board_state[new_y][self.x].is_white == self.is_white:
						break
					else:
						valid_moves.append((new_y, self.x))
						break
				else: valid_moves.append((new_y, self.x))

		# Calculates possible horizontal Rook moves
		x_ranges = [range(self.x+1, BOARD_SIZE), range(self.x-1, -1)]
		for r in x_ranges:
			for new_x in r:
				if board_state[self.y][new_x] != EMPTY_SQUARE:
					if board_state[self.y][new_x].is_white == self.is_white:
						break
					else:
						valid_moves.append((self.y, new_x))
						break
				else: valid_moves.append((self.y, new_x))
		
		# print(valid_moves)
		return valid_moves


class Knight(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'H' if self.is_white else 'h'

	def valid_moves(self, board_state):
		valid_moves = []

		valid_moves.append((self.y-2, self.x-1))
		valid_moves.append((self.y-2, self.x+1))
		valid_moves.append((self.y+2, self.x-1))
		valid_moves.append((self.y+2, self.x+1))
		valid_moves.append((self.y-1, self.x-2))
		valid_moves.append((self.y+1, self.x-2))
		valid_moves.append((self.y-1, self.x+2))
		valid_moves.append((self.y+1, self.x+2))

		# valid_moves = filter((lambda x : if ))


class Bishop(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'B' if self.is_white else 'b'

class Queen(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'Q' if self.is_white else 'q'

class King(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'K' if self.is_white else 'k'

class Pawn(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'P' if self.is_white else 'p'
