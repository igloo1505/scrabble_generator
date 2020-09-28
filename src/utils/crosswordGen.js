const words = ["try", "crossword", "stiles"];

const generateInitialGrid = () => {
  let grid = [];
  let GRID_ROWS = 20;
  let GRID_COLS = 20;
  for (var i = 0; i < GRID_ROWS; i++) {
    for (var j = 0; j < GRID_COLS; j++) {
      let o = {};
      o.row = i;
      o.col = j;
      o.char = "";
      grid.push(o);
    }
  }

  return grid;
};

let GRID = generateInitialGrid();

console.log(GRID);

// let y = x.filter((o) => o.row === 0 && o.col === 3);
// console.log("filtered", y);
