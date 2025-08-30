const AUTOMATAS = {
	"Conway's Game of Life": {
		default_cell: "Dead Cell",
		initial_create_cell: "Alive Cell",
		cells: {
			"Dead Cell": {
				color: "black",
				info: "A dead cell",
			},
			"Alive Cell": {
				color: "yellow",
				info: "An alive cell",
			},
		},
	},
};

export function get_automata_info(automata) {
	return AUTOMATAS[automata];
}
