var MatchGame = {
  turns : 0,
  matches : [],
  boardSize : undefined
};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  MatchGame.startGame();
});



/*
  starts new game and hides pop-up
*/

MatchGame.startGame = function() {
  $('.4x3').click(function () {
    $('#start-game').fadeOut("slow", function() {
      var $game = $('#game');
      MatchGame.boardSize = 7
      var values = MatchGame.generateCardValues(MatchGame.boardSize);
      MatchGame.renderCards(values, $game);
    });

  });

  $('.4x4').click(function () {
    $('#start-game').fadeOut("slow", function() {
      var $game = $('#game');
      MatchGame.boardSize = 9
      var values = MatchGame.generateCardValues(MatchGame.boardSize);
      MatchGame.renderCards(values, $game);
    });

  });

  $('.4x5').click(function () {
    $('#start-game').fadeOut("slow", function() {
      var $game = $('#game');
      MatchGame.boardSize = 11
      var values = MatchGame.generateCardValues(MatchGame.boardSize);
      MatchGame.renderCards(values, $game);
    });

  });

};




/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function(boardSize) {
  var orderedArr = [];
  for (i = 1; i < boardSize; i++) {
    orderedArr.push(i);
    orderedArr.push(i);
  }

  var randomArr = [];
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


  $game.data('flippedCards', []);

  for (i = 0; i < cardValues.length; i++) {
    var value = cardValues[i];
    var color = colors[value - 1];
    var data = {
      value : value,
      flipped : false,
      color : color
    };

    var $cardElement = $('<div class= "col-xs-3 card"></div>');
    $cardElement.data(data);
    $game.append($cardElement);

  }


  /* changes color on hover
    $('.card').hover(function() {
      $(this).css("background-color", "rgb(50, 80, 100)");
    }, function() {
      $(this).css("background-color", "rgb(32, 64, 86)");
    });
  */



  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($card.data('flipped')) {
    return;
  }

  $card.css('background-color', $card.data('color'));
  $card.text($card.data('value'));
  $card.data('flipped', true);

  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);


  if (flippedCards.length === 2) {

    var $turns = $('#turns');
    ++MatchGame.turns;
    $turns.text('TURNS: ' + MatchGame.turns);

    if (flippedCards[0].data('value') === flippedCards[1].data('value')) {

      var matches = MatchGame.matches;
      matches.push($card);

      var matchCss = {
        backgroundColor : 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      flippedCards[0].css(matchCss);
      flippedCards[1].css(matchCss);
    } else {
      window.setTimeout(function() {
      flippedCards[0].css('background-color', 'rgb(32, 64, 86)');
      flippedCards[1].css('background-color', 'rgb(32, 64, 86)');
      flippedCards[0].text('');
      flippedCards[1].text('');
      flippedCards[0].data('flipped', false);
      flippedCards[1].data('flipped', false);
    }, 350);
    }
    $game.data('flippedCards', []);

    if (MatchGame.matches.length === MatchGame.boardSize - 1) {
      MatchGame.displayWin();
    }

  }

  /*
  displays win pop-up
  */

  MatchGame.displayWin = function() {
      $('.win-container').fadeIn("slow");

  };





};
