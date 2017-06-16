//Business Logic
var players = [];

function Player(name) {
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
  $("button#player-roll").click(function() {
    var die = Math.floor(Math.random()*6 + 1);
    alert(die);
  })
})
