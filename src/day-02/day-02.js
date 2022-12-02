import { readFileSync } from "fs";

const matches = readFileSync("src/day-02/day-02.input.txt")
  .toString()
  .split("\n");

// A - rock
// B - paper
// C - scissors

// X - rock
// Y - paper
// Z - scissors

// Part 1
const play = (opponent, me) => {
  switch (opponent) {
    case "A": {
      if (me === "Y") return "win";
      else if (me === "X") return "tie";
      else return "lose";
    }
    case "B": {
      if (me === "Z") return "win";
      else if (me === "Y") return "tie";
      else return "lose";
    }
    case "C": {
      if (me === "X") return "win";
      else if (me === "Z") return "tie";
      else return "lose";
    }
  }
};

const score = (outcome, myPick) => {
  // console.log("outcome: ", outcome);
  // console.log("my pick: ", myPick);
  let myPickScore;
  if (myPick === "X") myPickScore = 1;
  else if (myPick === "Y") myPickScore = 2;
  else if (myPick === "Z") myPickScore = 3;

  switch (outcome) {
    case "win":
      return 6 + myPickScore;
    case "lose":
      return myPickScore;
    case "tie":
      return 3 + myPickScore;
  }
};

const points = [];
matches.map((pick) => {
  const outcome = play(pick.charAt(0), pick.charAt(2));
  const scoredMatch = score(outcome, pick.charAt(2));
  points.push(scoredMatch);
});

console.log(
  "total points part 1",
  points.reduce((a, c) => a + c, 0)
);

// Part 2

// X - need to lose
// Y - need to tie
// Z - need to win

const needToWin = (opponent, expectedOutcome) => {
  switch (opponent) {
    case "A": {
      if (expectedOutcome === "X") return "C";
      else if (expectedOutcome === "Y") return "A";
      else return "B";
    }
    case "B": {
      if (expectedOutcome === "X") return "A";
      else if (expectedOutcome === "Y") return "B";
      else return "C";
    }
    case "C": {
      if (expectedOutcome === "X") return "B";
      else if (expectedOutcome === "Y") return "C";
      else return "A";
    }
  }
};

const playPart2 = (opponent, me) => {
  switch (opponent) {
    case "A": {
      if (me === "A") return "tie";
      else if (me === "B") return "win";
      else return "lose";
    }
    case "B": {
      if (me === "B") return "tie";
      else if (me === "C") return "win";
      else return "lose";
    }
    case "C": {
      if (me === "C") return "tie";
      else if (me === "A") return "win";
      else return "lose";
    }
  }
};

const scorePart2 = (outcome, myPick) => {
  let myPickScore;
  if (myPick === "A") myPickScore = 1;
  else if (myPick === "B") myPickScore = 2;
  else if (myPick === "C") myPickScore = 3;

  switch (outcome) {
    case "win":
      return 6 + myPickScore;
    case "lose":
      return myPickScore;
    case "tie":
      return 3 + myPickScore;
  }
};

const scores = [];
matches.map((pick) => {
  const pickNeeded = needToWin(pick.charAt(0), pick.charAt(2));
  const outcome = playPart2(pick.charAt(0), pickNeeded);
  const scoredMatch = scorePart2(outcome, pickNeeded);
  scores.push(scoredMatch);
});

console.log(
  "total points part 2",
  scores.reduce((a, c) => a + c, 0)
);
