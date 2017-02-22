var ticTacToe = {
  player: ""
};

ticTacToe.player = "x";

$(".box").click( function(e) {
  e.preventDefault();

  var checkTile = $(e.target).css("background-image");

  console.log(e.target.id);
  console.log($(e.target).css("background-image"));

  if ($(e.target).css("background-image") === "none") {
    
    if (ticTacToe.player === "x") {
      ticTacToe.player = "o";
      $(e.target).css({"background-image": "url(images/X-Box.png)", 
                  "background-position": "center", 
                  "background-size": "155px 155px"}); 
      console.log("this is player X");
    } 
    else {
      ticTacToe.player = "x";
      $(e.target).css({"background-image": "url(images/O-Box.jpg)", 
                  "background-position": "center", 
                  "background-size": "95px 95px"}); 
      console.log("this is player O");
    }
  
  } else {
    console.log("a " + $(e.target) + " is placed here");
  }


});

