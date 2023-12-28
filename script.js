const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    updateBoard();
    checkWinner();
    togglePlayer();
  }
}

function updateBoard() {
  for (let i = 0; i < gameBoard.length; i++) {
    const cell = board.children[i];
    cell.textContent = gameBoard[i];
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      message.textContent = `${currentPlayer} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    message.textContent = 'It\'s a draw!';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  message.textContent = '';
  updateBoard();
}
