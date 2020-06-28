BOARD_SIZE = 8
EMPTY_SQUARE = ' '

class Piece():
	def __init__(self, row, column, is_white=True):
		self.char = None
		self.y = row
		self.x = column
		self.is_white = is_white
		self.has_moved = False
		self.is_white_turn = True

	def __str__(self):
		return self.char

	def change_pos(self, pos):
		self.y, self.x = pos

	def filter_out_of_bounds(self, moves, board_state):
		""" Filters moves in 'moves' which are out of bounds of the board and returns filtered list of moves """
		return [move for move in moves if all(x < BOARD_SIZE and x >= 0 for x in move)]

	def filter_conflicting(self, moves, board_state):
		""" Removes moves that go to a position of an allied piece """
		filtered_moves = []
		for move in moves:
			state = board_state[move[0]][move[1]]
			if state == EMPTY_SQUARE:
				filtered_moves.append(move)
			elif state.is_white != self.is_white:
				filtered_moves.append(move)
		return filtered_moves

class Rook(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'R' if self.is_white else 'r'

	def valid_moves(self, board_state):
		valid_moves = []

		# Calculates possible vertical Rook moves
		y_ranges = [range(self.y+1, BOARD_SIZE), range(self.y-1, -1, -1)]
		for r in y_ranges:
			for y in r:
				state = board_state[y][self.x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, self.x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, self.x))
					break
				else: break

		# Calculates possible horizontal Rook moves
		x_ranges = [range(self.x+1, BOARD_SIZE), range(self.x-1, -1, -1)]
		for r in x_ranges:
			for x in r:
				state = board_state[self.y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((self.y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((self.y, x))
					break
				else: break

		print(valid_moves)
		return valid_moves


class Knight(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'H' if self.is_white else 'h'

	def valid_moves(self, board_state):
		valid_moves = []

		# Knight has at most 8 valid moves
		valid_moves.append((self.y-2, self.x-1))
		valid_moves.append((self.y-2, self.x+1))
		valid_moves.append((self.y+2, self.x-1))
		valid_moves.append((self.y+2, self.x+1))
		valid_moves.append((self.y-1, self.x-2))
		valid_moves.append((self.y+1, self.x-2))
		valid_moves.append((self.y-1, self.x+2))
		valid_moves.append((self.y+1, self.x+2))

		# Filter out moves which are out of bounds of the board
		valid_moves = self.filter_out_of_bounds(valid_moves, board_state)
		valid_moves = self.filter_conflicting(valid_moves, board_state)

		return valid_moves

class Bishop(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'B' if self.is_white else 'b'

	def valid_moves(self, board_state):
		valid_moves = []

		x = self.x+1
		y_ranges = [range(self.y+1, BOARD_SIZE), range(self.y-1, -1, -1)]
		for r in y_ranges:
			for y in r:
				state = board_state[y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, x))
					break
				else: break
				x += 1
			x = self.x+1
		
		x = self.x-1
		for r in y_ranges:
			for y in r:
				state = board_state[y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, x))
					break
				else: break
				x -= 1
			x = self.x-1

		print(self.filter_out_of_bounds(valid_moves, board_state))
		return self.filter_out_of_bounds(valid_moves, board_state)

		

class Queen(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'Q' if self.is_white else 'q'
	
	def valid_moves(self, board_state):
		valid_moves = []

		# Rook-like moves
		# Calculates possible vertical Rook moves
		y_ranges = [range(self.y+1, BOARD_SIZE), range(self.y-1, -1, -1)]
		for r in y_ranges:
			for y in r:
				state = board_state[y][self.x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, self.x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, self.x))
					break
				else: break

		# Calculates possible horizontal Rook moves
		x_ranges = [range(self.x+1, BOARD_SIZE), range(self.x-1, -1, -1)]
		for r in x_ranges:
			for x in r:
				state = board_state[self.y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((self.y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((self.y, x))
					break
				else: break

		# Bishop-like moves
		# Incrementing x
		x = self.x+1
		y_ranges = [range(self.y+1, BOARD_SIZE), range(self.y-1, -1, -1)]
		for r in y_ranges:
			for y in r:
				state = board_state[y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, x))
					break
				else: break
				x += 1
			x = self.x+1
		
		# Decrementing x
		x = self.x-1
		for r in y_ranges:
			for y in r:
				state = board_state[y][x]
				if state == EMPTY_SQUARE:
					valid_moves.append((y, x))
				elif state.is_white != self.is_white:
					valid_moves.append((y, x))
					break
				else: break
				x -= 1
			x = self.x-1

		print(self.filter_out_of_bounds(valid_moves, board_state))
		return self.filter_out_of_bounds(valid_moves, board_state)

class King(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'K' if self.is_white else 'k'

	def valid_moves(self, board_state):
		valid_moves = []

		valid_moves.append((self.y-1, self.x-1))
		valid_moves.append((self.y-1, self.x))
		valid_moves.append((self.y-1, self.x+1))
		valid_moves.append((self.y, self.x+1))
		valid_moves.append((self.y+1, self.x+1))
		valid_moves.append((self.y+1, self.x))
		valid_moves.append((self.y+1, self.x-1))
		valid_moves.append((self.y, self.x-1))

		valid_moves = self.filter_out_of_bounds(valid_moves, board_state)
		valid_moves = self.filter_conflicting(valid_moves, board_state)

		print(valid_moves)
		return valid_moves


class Pawn(Piece):
	def __init__(self, row, column, is_white=True):
		super().__init__(row, column, is_white=is_white)
		self.char = 'P' if self.is_white else 'p'

	def valid_moves(self, board_state):
		valid_moves = []
		straight_moves = []
		diagonal_moves = []
		y_modifier = 1 if self.is_white else -1

		straight_moves.append((self.y + y_modifier, self.x))

		if not self.has_moved:
			straight_moves.append((self.y + 2*y_modifier, self.x))
		
		diagonal_moves.append((self.y + y_modifier, self.x - 1))
		diagonal_moves.append((self.y + y_modifier, self.x + 1))

		for move in straight_moves:
			if board_state[move[0]][move[1]] == EMPTY_SQUARE:
				valid_moves.append(move)
			else: break

		for move in diagonal_moves:
			state = board_state[move[0]][move[1]]
			if state != EMPTY_SQUARE and state.is_white != self.is_white:
				valid_moves.append(move)
		
		return self.filter_out_of_bounds(valid_moves, board_state)

