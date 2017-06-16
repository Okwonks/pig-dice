//Business Logic
var die = math.floor(math.random()*6 + 1);

var players = [];

function player(name) {
  this.name = name;
  this.total = [];
}


//User Interface Logic
$(document).ready(function() {
  $("#player-submit").submit(function(event) {
    event.preventDefault();

    var playerOne = $("input#player1").val();
    var playerTwo = $("input#player2").val();
  });

  //here's where the game will be able to compute the values
  $()
})
