// import $ from "jquery";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/styles.css";
import * as game from "./js/game.js";

$(document).ready(function () {
    $('#userNew').submit(function(event) {
      event.preventDefault();
      
        
      
      


      
      
      const userName = $("#userInput").val();

    switch (selection) {
      case "mage":
        const newMage = storeState(mage);
        break;
      case "archer":
        const newArcher = storeState(archer);
        break;
      case "knight": 
        const newKnight = storeState(knight);
        break;
    }
      const userName = $("#userInput").val();
    }
  );
})
  
