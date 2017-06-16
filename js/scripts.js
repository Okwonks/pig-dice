//Business Logic
var players = [];

function Player(name) {
  this.name = name;
  this.total = [];
}


//User Interface Logic
$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();

    var playerOne = $("input#player1").val();
    var playerTwo = $("input#player2").val();

    //console.log(playerOne);

    var newPlayerOne = new Player(playerOne);
    var newPlayerTwo = new Player(playerTwo);
    console.log(newPlayerOne);
    console.log(newPlayerTwo);

    players.push(newPlayerOne, newPlayerTwo);
  });

  //here's where the game will be able to compute the values
    $("button#player-roll").click(function() {
      var die = Math.floor(Math.random()*6 + 1);
    //  alert(die);
      var countNumber = players[0].total.push(die);
      var score = players[0].reduce(function(die, countNumber) {
        return die + countNumber;
        console.log(die);
      })

  })
}) //end of document User Interface Logic
