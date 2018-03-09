$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  orderedArr = [];
  for (i = 1; i < 9; i++) {
    orderedArr.push(i);
    orderedArr.push(i);
  };

  randomArr = [];
  while (orderedArr.length > 0) {
    randomIndex = Math.floor(Math.random() * orderedArr.length);
    randomValue = orderedArr.splice(randomIndex, 1)[0];
    randomArr.push(randomValue);
  }
  return randomArr;

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $('game').empty();
  $game.data('flippedCards', []);

  for (i = 0; i <randomArr.length; i++) {
    var $cardElement = $('<div class= "col-xs-3 card"></div>');
    $cardElement.data(data);
    var color = randomArr[i - 1]
    var data = {
      value : randomArr[i],
      flipped : false,
      color : color

    };
  $game.append($cardElement);
  }

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if $card.data('flipped') {
    return;
  }

};
