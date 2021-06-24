// import $ from "jquery";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/styles.css";
import * as game from "./js/game.js";

$(document).ready(function () {
    $('#userNew').submit(function(event) {
      event.preventDefault();
      const userName = $("#userInput").val();
      let newCharacter;

    switch ($("#character option:selected").val()) {
      case "mage":
        newCharacter = game.storeState(game.mage);
        break;
      case "archer":
        newCharacter = game.storeState(game.archer);
        break;
      case "knight": 
        newCharacter = game.storeState(game.knight);
        break;
    }

    console.log(newCharacter);

    $('#show-state').click(function() {
      const currentState = selection();
      $('#showNewCharacter').text(userName);
      $('#showAbilities').text()
    });
  });
});