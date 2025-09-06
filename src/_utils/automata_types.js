import {
	FaArrowDown,
	FaArrowLeft,
	FaArrowRight,
	FaArrowUp,
} from "react-icons/fa6";
import { GiLifeBar, GiBrain } from "react-icons/gi";
import { HiMiniBugAnt } from "react-icons/hi2";
import { PiCircuitryFill } from "react-icons/pi";

const AUTOMATAS = {
	"Conway's Game of Life": {
		icon: GiLifeBar,
		inactive_cells: ["Dead Cell"],
		info: "Cells live or die by neighbors",
		default_cell: "Dead Cell",
		initial_create_cell: "Alive Cell",
		cells: {
			"Dead Cell": {
				color: "black",
				info: "Becomes alive if 3 alive neighbours",
			},
			"Alive Cell": {
				color: "yellow",
				info: "Lives if 2 or 3 alive neighbours",
			},
		},
	},
	"Langton's Ant": {
		info: "Ant flips tiles, turns, repeats",
		icon: HiMiniBugAnt,
		inactive_cells: ["Black Cell", "White Cell"],
		default_cell: "Black Cell",
		initial_create_cell: "White Cell Forward",
		cells: {
			"Black Cell Forward": {
				name: "Ant on Black Cell",
				color: "black",
				icon: FaArrowUp,
				info: "Turn left, flip cell to white and move forward",
			},
			"Black Cell Backward": {
				color: "black",
				icon: FaArrowDown,
				visible: false,
			},
			"Black Cell Left": {
				color: "black",
				icon: FaArrowLeft,
				visible: false,
			},
			"Black Cell Right": {
				color: "black",
				icon: FaArrowRight,
				visible: false,
			},
			"White Cell Forward": {
				name: "Ant on White Cell",
				icon: FaArrowUp,
				color: "white",
				info: "Turn right, flip cell to black and move forward",
			},
			"White Cell Backward": {
				icon: FaArrowDown,
				color: "white",
				visible: false,
			},
			"White Cell Left": {
				icon: FaArrowLeft,
				color: "white",
				visible: false,
			},
			"White Cell Right": {
				icon: FaArrowRight,
				color: "white",
				visible: false,
			},
			"Black Cell": {
				color: "black",
				visible: false,
			},
			"White Cell": {
				color: "white",
				visible: false,
			},
		},
	},
	"Brian's Brain": {
		info: "Cells flash, then cool down",
		icon: GiBrain,
		default_cell: "Dead Cell",
		initial_create_cell: "Alive Cell",
		cells: {
			"Dead Cell": {
				color: "black",
				info: "Becomes alive if 2 alive neighbours",
			},
			"Alive Cell": {
				color: "yellow",
				info: "Becomes dying cell",
			},
			"Dying Cell": {
				color: "grey",
				info: "Becomes dead cell",
			},
		},
	},
	"Wire World": {
		info: "Electrons move through wires",
		icon: PiCircuitryFill,
		default_cell: "Empty Cell",
		initial_create_cell: "Conductor",
		cells: {
			"Empty Cell": {
				color: "black",
				info: "An empty cell",
			},
			"Electron Head": {
				color: "blue",
				info: "Becomes electron tail",
			},
			"Electron Tail": {
				color: "Red",
				info: "Becomes conductor",
			},
			Conductor: {
				color: "Yellow",
				info: "Becomes electron head if 1 or 2 neighbours",
			},
		},
	},
};

export function get_automata_info(automata) {
	return AUTOMATAS[automata];
}

export function get_all_automata() {
	return Object.fromEntries(
		Object.entries(AUTOMATAS).map(([name, data]) => [
			name,
			{
				icon: data.icon,
				info: data.info,
			},
		])
	);
}

export function get_automata_cell_type(automata) {
	const automata_cells = AUTOMATAS[automata].cells;

	const filtered_automata_cells = Object.fromEntries(
		Object.entries(automata_cells).filter(
			([_, meta]) => meta["visible"] ?? true
		)
	);
	return filtered_automata_cells;
}
