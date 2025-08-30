const AUTOMATAS = {
	"Conway's Game of Life": {
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
		default_cell: "Black Cell",
		initial_create_cell: "White Cell",
		cells: {
			"Black Cell": {
				color: "black",
				info: "Turn left, flip cell to white and move forward",
			},
			"White Cell": {
				color: "white",
				info: "Turn right, flip cell to black and move forward",
			},
		},
	},
	"Brian's Brain": {
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
