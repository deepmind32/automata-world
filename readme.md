# About the Repository

This repository contains website that implements various games realted to cellular automata including;

1. Conway's Game of Life
2. Langton's Ant
3. Brian's Brain
4. Wire World

As the automata unfolds, you will be able to see amazing patterns and hear the sound with evolution of the automata space.

Below is the rules and explanation of each game.

## Conway's Game of Life

1. Initialize an infinite matrix with dead cells (black).
2. User can make initialize set of alive cells (yellow).
3. A cell lives, if it has either 2 or 3 neighbours.
4. A dead cell become alive if it has exactly three neighbours.

## Langton's Ant

1. Intialize an infinite matrix where;

- On white; turn right and flip square to black, move forward
- On black; turn left, and flip square to white, move forward

2. User can intialize any number of ants and see the pattern.

## Brian's Brain
- Each item on matrix represents a cell. 
- A cell is either alive, dying, or dead.
- **Rules at each step**
1. Alive becomes dying,
2. Dying becomes dead,
3. If eactly two neighbors are alive, then dead becomes alive.

## Wire World
- Black: empty, Blue: electron head, Red: electron tail, Yellow: conductor
- **Rules at each step**
1. electron head becomes electron tail
2. electron tail becomes conductor
3. conductor becomes head if 1-2 neighbours are head else conductor
