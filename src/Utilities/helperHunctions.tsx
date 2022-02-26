const checkDiagonally = (tileArray: string[]) => {
  if (
    (tileArray[0] === tileArray[4] && tileArray[4] === tileArray[8]) ||
    (tileArray[2] === tileArray[4] && tileArray[4] === tileArray[6])
  ) {
    return tileArray[4];
  } else {
    return "none";
  }
};

const checkHorizontally = (tileArray: string[]) => {
  if (tileArray[0] === tileArray[1] && tileArray[1] === tileArray[2]) {
    return tileArray[1];
  } else if (tileArray[3] === tileArray[4] && tileArray[4] === tileArray[5]) {
    return tileArray[4];
  } else if (tileArray[6] === tileArray[7] && tileArray[7] === tileArray[8]) {
    return tileArray[7];
  } else {
    return "none";
  }
};

const checkVertically = (tileArray: string[]) => {
  if (tileArray[0] === tileArray[3] && tileArray[3] === tileArray[6]) {
    return tileArray[3];
  } else if (tileArray[1] === tileArray[4] && tileArray[4] === tileArray[7]) {
    return tileArray[4];
  } else if (tileArray[2] === tileArray[5] && tileArray[5] === tileArray[8]) {
    return tileArray[5];
  } else {
    return "none";
  }
};

export const getWinner = (tileArray: string[]): string => {
  let winner = "none";
  if (checkDiagonally(tileArray) !== "none") {
    winner = checkDiagonally(tileArray);
  } else if (checkHorizontally(tileArray) !== "none") {
    winner = checkHorizontally(tileArray);
  } else if (checkVertically(tileArray) !== "none") {
    winner = checkVertically(tileArray);
  } else if (winner === "none" && tileArray.every((value) => value !== "")) {
    winner = "stalemate";
  }
  return winner;
};
