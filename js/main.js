var ticTacToe = {
  player: "X",
  matrix: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  has_winner : false,
  player1Score: 0,
  player2Score: 0
};

$(".box").on("click", function(e) {
  e.preventDefault();

  var checkTile = $(this).css("background-image");
  var gotMatrixString = $(this).data('matrix');

  var matrixData = gotMatrixString.split(",");

  if ($(this).css("background-image") === "none") {
    
    if (ticTacToe.player === "X") {
      $(this).css({"background-image": "url(images/X-Box.png)", 
                  "background-position": "center",
                  "background-repeat": "no-repeat", 
                  "background-size": "155px 155px"}); 
      ticTacToe.matrix[parseInt(matrixData[0])][parseInt(matrixData[1])] = 1;
      ticTacToe.player = "O";
      CheckWinner();
    } 
    else {
      $(this).css({"background-image": "url(images/O-Box.jpg)", 
                  "background-position": "center",
                  "background-repeat": "no-repeat", 
                  "background-size": "95px 95px"}); 
      ticTacToe.matrix[parseInt(matrixData[0])][parseInt(matrixData[1])] = 5;
      ticTacToe.player = "X";
      CheckWinner();
    }
  
  }

});

$(".js-reset-btn").on("click", function(e) {
  e.preventDefault();

  ClearBoard();
})

function CheckWinner() {
  var sum = 0;

  // checks horizontal patterns
  for (var i = 0; i <= 2; i++) {
    for (var x = 0; x <= 2; x++) {

      sum = sum + ticTacToe.matrix[i][x];
      if (sum === 3) {

        ticTacToe.has_winner = true;
        ticTacToe.player1Score++;
        $(".js-player1-score").text(ticTacToe.player1Score);
        i = 3;
        break;

      } else if (sum === 15) {

        ticTacToe.has_winner = true;
        ticTacToe.player2Score++;
        $(".js-player2-score").text(ticTacToe.player2Score);
        i = 3;
        break;
      }
    }
    // check for winner
    if (ticTacToe.has_winner) {
      Initialize();
      return true;
    }
    sum = 0;
  }

  // checks vertical pattern
  for (var i = 0; i <= 2; i++) {
    for (var x = 0; x <= 2; x++) {

      sum = sum + ticTacToe.matrix[x][i];
      if (sum === 3) {

        ticTacToe.has_winner = true;
        ticTacToe.player1Score++;
        $(".js-player1-score").text(ticTacToe.player1Score);
        i = 3;
        break;

      } else if (sum === 15) {

        ticTacToe.has_winner = true;
        ticTacToe.player2Score++;
        $(".js-player2-score").text(ticTacToe.player2Score);
        i = 3;
        break;
      }
    }
    if (ticTacToe.has_winner) {
      Initialize();
      return true;
    }
    sum = 0;
  }

  // checks diagonal top left to btm right
  for (var i = 0; i <= 2; i++) {
    for (var x = 0; x <= 2; x++) {
      if (ticTacToe.matrix[0][0] + ticTacToe.matrix[1][1] + ticTacToe.matrix[2][2] === 3) {

        ticTacToe.has_winner = true;
        ticTacToe.player1Score++;
        $(".js-player1-score").text(ticTacToe.player1Score);
        i = 3;
        break;

      } else if (ticTacToe.matrix[0][0] + ticTacToe.matrix[1][1] + ticTacToe.matrix[2][2] === 15) {

        ticTacToe.has_winner = true;
        ticTacToe.player2Score++;
        $(".js-player2-score").text(ticTacToe.player2Score);
        i = 3;
        break;
      }
    }
    
    if (ticTacToe.has_winner) {
      Initialize();
      return true;
    }
  }

  //checks diagonal btm left to top right
  for (var i = 0; i <= 2; i++) {
    for (var x = 2; x >= 0; x--) {
      if (ticTacToe.matrix[0][2] + ticTacToe.matrix[1][1] + ticTacToe.matrix[2][0] === 3) {

        ticTacToe.has_winner = true;
        ticTacToe.player1Score++;
        $(".js-player1-score").text(ticTacToe.player1Score);
        i = 3;
        break;

      } else if (ticTacToe.matrix[0][2] + ticTacToe.matrix[1][1] + ticTacToe.matrix[2][0] === 15) {

        ticTacToe.has_winner = true;
        ticTacToe.player2Score++;
        $(".js-player2-score").text(ticTacToe.player2Score);
        i = 3;
        break;
      }
    }
    if (ticTacToe.has_winner) {
      Initialize();
      return true;
    }
  }
}

function Initialize() {
  ticTacToe.has_winner = false;
  ClearBoard();
  return ticTacToe;
}

function ClearBoard() {
  ticTacToe.matrix.forEach(function(element) {
    for (var m = 0; m <= 2; m++) {
      for (var n = 0; n <= 2; n++) {
        ticTacToe.matrix[m][n] = element;
        element = null;
      }
    }
  });
  console.log(ticTacToe.matrix)
  $(".box").css("background-image", "none");
  return ticTacToe;
}