import { get_neighbours } from "../automata";
import { copy_grid } from "../grid";

//Empty Cell Electron Head Electron Tail Conductor
export default function compute_next_generation(grid) {
	const updated_grid = copy_grid(grid);

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid.length; y++) {
			const neighbours = get_neighbours(x, y, grid.length);
			const neighbours_types = neighbours.map(
				(coord) => grid[coord[0]][coord[1]]
			);
			const neighbours_types_counts = neighbours_types.reduce((acc, item) => {
				acc[item] = (acc[item] ?? 0) + 1;
				return acc;
			}, {});
			const current_type = grid[x][y];

			if (current_type === "Electron Head") {
				updated_grid[x][y] = "Electron Tail";
			} else if (current_type === "Electron Tail") {
				updated_grid[x][y] = "Conductor";
			} else if (current_type === "Conductor") {
				if (neighbours_types_counts["Electron Head"] == 2 || neighbours_types_counts["Electron Head"] == 1) {
					updated_grid[x][y] = "Electron Head";
				}
			}
		}
	}

	return updated_grid;
}
