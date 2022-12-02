import { readFileSync } from "fs";

const elves = readFileSync("src/day-01/day-01.input.txt")
  .toString()
  .split("\n\n");

// part 1
const calories = elves.map((elf) => elf.split("\n"));
const sums = calories.map((elfCalories) => {
  return elfCalories.reduce((acc, curr) => acc + Number(curr), 0);
});

const sortedSums = sums.sort((a, b) => b - a);
console.log(sortedSums);

// Part 2
const biggestThree = sortedSums.slice(0, 3);
console.log(biggestThree);

const sumOfThree = biggestThree.reduce(
  (acc, curr) => Number(acc) + Number(curr),
  0
);
console.log(sumOfThree);
