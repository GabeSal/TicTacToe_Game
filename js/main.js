var ticTacToe = {
  player: "",
  matrix: [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ]
};

ticTacToe.player = "x";

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
    } 
    else {
      $(e.target).css({"background-image": "url(images/O-Box.jpg)", 
                  "background-position": "center",
                  "background-repeat": "no-repeat", 
                  "background-size": "95px 95px"}); 
      ticTacToe.matrix[parseInt(matrixData[0])][parseInt(matrixData[1])] = 0;
      ticTacToe.player = "X";
    }
  
  }

});

//function