import conway_next_generation_step from "./conway-game-of-life";
import brian_next_generation_step from "./brian-brain";
import langton_next_generation_step from "./langton-ant";
import wireworld_next_generation_step from "./wire-world";

export default function get_next_generation_step(automata) {
	if (automata === "Conway's Game of Life") {
		return conway_next_generation_step;
	} else if (automata === "Langton's Ant") {
		return langton_next_generation_step;
	} else if (automata === "Brian's Brain") {
		return brian_next_generation_step;
	} else if (automata === "Wire World") {
		return wireworld_next_generation_step;
	}
}
