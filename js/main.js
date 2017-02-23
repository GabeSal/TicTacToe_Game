var ticTacToe = {
  player: "",
  matrix: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  has_winner : false
};

ticTacToe.player = "X";

$(".box").click( function(e) {
  e.preventDefault();

  var checkTile = $(e.target).css("background-image");
  var gotMatrixString = $(e.target).data('matrix');

  var matrixData = gotMatrixString.split(",");

  console.log(gotMatrixString);
  console.log($(e.target).css("background-image"));

  if ($(e.target).css("background-image") === "none") {
    
    if (ticTacToe.player === "X") {
      $(e.target).css({"background-image": "url(images/X-Box.png)", 
                  "background-position": "center",
                  "background-repeat": "no-repeat", 
                  "background-size": "155px 155px"}); 
      ticTacToe.matrix[parseInt(matrixData[0])][parseInt(matrixData[1])] = 1;
      ticTacToe.player = "O";
      CheckWinner();
    } 
    else {
      $(e.target).css({"background-image": "url(images/O-Box.jpg)", 
                  "background-position": "center",
                  "background-repeat": "no-repeat", 
                  "background-size": "95px 95px"}); 
      ticTacToe.matrix[parseInt(matrixData[0])][parseInt(matrixData[1])] = 5;
      ticTacToe.player = "X";
      CheckWinner();
    }
  
  }

  console.log(ticTacToe.matrix);

});

function CheckWinner() {
  var sum = 0;

  for (var i = 0; i <= 2; i++) {
    for (var x = 0; x <= 2; x++) {
      sum = sum + ticTacToe.matrix[i][x];
      if (sum === 3) {
        alert("player 1 wins!");
        ticTacToe.has_winner = true;
        i = 3;
        break;
      } else if (sum === 15) {
        alert("player 2 wins!");
        ticTacToe.has_winner = true;
        i = 3;
        break;
      }
    }
    // check for winner
    if (ticTacToe.has_winner) {
      Initialize();
      console.log("resetting");
      return true;
    }
    console.log(sum);
    sum = 0;
  }

  for (var i = 0; i <= 2; i++) {
    for (var x = 0; x <= 2; x++) {
      sum = sum + ticTacToe.matrix[x][i];
      if (sum === 3) {
        alert("player 1 wins!");
        ticTacToe.has_winner = true;
        i = 3;
        break;
      } else if (sum === 15) {
        alert("player 2 wins!");
        ticTacToe.has_winner = true;
        i = 3;
        break;
      }
    }
    if (ticTacToe.has_winner) {
      Initialize();
      return true;
    }
    console.log(sum);
    sum = 0;
  }
}

function Initialize() {
  ticTacToe.matrix.fill(null);
  ticTacToe.has_winner = false;
  console.log(ticTacToe);
}

function ClearBoard() {
  
}