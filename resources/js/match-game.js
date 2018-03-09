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
  $("game").empty();

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
