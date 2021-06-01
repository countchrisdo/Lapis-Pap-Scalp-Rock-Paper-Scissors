//Defining key variables
var player = { choice: null };
var enemy = { choice: null };

const winScreen = "You Win! "
const loseScreen = "Try Again! "
const tieGame = "Tie Game! Try Again"

//Choice 
function playButton(e) {
  const options = ["Lapis", "Papyrus", "Scalpellus"];

  if (e.target.id == "lapis") {
    player.choice = options[0];
  } else
    if (e.target.id == "papyrus") {
      player.choice = options[1];
    } else
      if (e.target.id == "scalpellus") {
        player.choice = options[2];
      }

  function enemyChooses() {
    const RNGesus = Math.floor(Math.random() * options.length);
    enemy.choice = options[RNGesus];
  }

  enemyChooses();

  function compareChoices() {

    if (player.choice === enemy.choice) {
      showResults(tieGame);
      return;
    }
    //lapis v scalp
    else if (player.choice == options[0]) {
      if (enemy.choice == options[2]) {
        showResults(
          winScreen +
          player.choice +
          " beats " +
          enemy.choice
        );
        return;
      } else {
        showResults(
          loseScreen +
          player.choice +
          " loses to " +
          enemy.choice
        );
        return;
      }

      //Papyrus
    } else if (player.choice == options[1]) {
      if (enemy.choice == options[0]) {
        showResults(
          winScreen +
          player.choice +
          " beats " +
          enemy.choice
        );
      } else {
        showResults(
          loseScreen +
          enemy.choice +
          " beats " +
          player.choice
        );
      }
      //Scalpellus
    } else if (player.choice == options[2]) {
      if (enemy.choice == options[1]) {
        showResults(
          winScreen +
          player.choice +
          " beats " +
          enemy.choice
        );
      } else {
        showResults(
          loseScreen +
          enemy.choice +
          " beats " +
          player.choice
        );
      }
    }
  }
  compareChoices();
}
// Show Results
function showResults(result) {
  textResult = document.createElement("p");
  textResult.innerText = result;
  document.body.appendChild(textResult);
}

document.getElementById("lapis").addEventListener("click", playButton);

document.getElementById("papyrus").addEventListener("click", playButton);

document.getElementById("scalpellus").addEventListener("click", playButton);