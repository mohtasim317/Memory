// You're given a CSS file for a memory game, and you need to implement the component using React.

// When the component first mounts, it should render an <span>h1</span> with the text content of <span>Memory</span> followed by a <span>div</span> with the CSS class of <span>board</span>.

// The board should contain 2 tile divs for each element in the given <span>TILE_COLORS</span> array ('red', 'green', 'blue', and 'yellow'). These tiles should be in a random order, based on a single call to the given <span>shuffle</span> function.

// Each tile div should have the tile class. When a tile is clicked on, it should be considered selected, and it should also be given its class from the <span>TILE_COLORS</span> array. Clicking on a tile that is already selected should have no effect.

// When two tiles are selected, they should be compared to check for a match. If there is a match, the tiles should keep their color class. If there is no match, then after 1 second both tiles should have their color classes removed. During this 1 second waiting period, no other tiles should be selectable.

// Once all of the matches have been found (i.e. every tile has its color class), The <span>h1</span> text content should change to <span>You Win!</span>. Additionally, a button should appear below the board div with the text content of <span>Restart</span>. When this button is clicked on, the tiles should all be flipped over (the color classes removed), and they should be shuffled into new random locations to restart the game. The <span>h1</span> text content should also return to the initial text content of <span>Memory</span>, and the restart button should be removed from the page.

// The complete HTML output of the memory component might look something like this initially:
// <h1>Memory</h1>
// <div class="board">
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
//   <div class="tile"></div>
// </div>

// After the game completes, that HTML might change to this:

// <h1>You Win!</h1>
// <div class="board">
//   <div class="tile red"></div>
//   <div class="tile blue"></div>
//   <div class="tile red"></div>
//   <div class="tile yellow"></div>
//   <div class="tile blue"></div>
//   <div class="tile yellow"></div>
//   <div class="tile green"></div>
//   <div class="tile green"></div>
// </div>
// <button>Restart</button>
// Your component has already been rendered to the DOM inside of a <span>#root</span> div directly in the body with the CSS imported.

import React, { useState } from "react";

const TILE_COLORS = ["red", "green", "blue", "yellow"];

export default function Memory() {
  const [initialBoard, setInitialBoard] = useState(() => {
    const initial: string[] = [];
    TILE_COLORS.map((element) => {
      initial.push(element, element);
    });
    shuffle(initial);
    console.log(initial);
    return initial;
  });

  const [tileClicked, setTileClicked] = useState(false);

  const onTileClick = () => {};
  // Write your code here.

  return (
    <>
      <h1>Memory</h1>
      <div className="board">
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
        <div className="tile "></div>
      </div>
      <button>Restart</button>
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
