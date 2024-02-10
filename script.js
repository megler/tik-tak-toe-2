window.onload = function () {
  const NUM_SQUARES = 9;

  let placeMarker = event => {
    const addX = "X";
    event.target.innerHTML = addX;
    alert(event.target.id.slice(2));
  };

  for (i = 0; i < NUM_SQUARES; i++) {
    id = "sq" + i;
    let gameSquare = document.createElement("div");
    gameSquare.id = id;
    gameSquare.className = "square";
    document.getElementById("gameboard").appendChild(gameSquare);
    gameSquare.addEventListener("click", placeMarker);
  }
};
