import { get_neighbours } from "../automata";
import { copy_grid } from "../grid";

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

			if (
				current_type === "Dead Cell" &&
				neighbours_types_counts["Alive Cell"] === 3
			) {
				updated_grid[x][y] = "Alive Cell";
			}

			if (current_type === "Alive Cell") {
				if (
					neighbours_types_counts["Alive Cell"] == 2 ||
					neighbours_types_counts["ALive Cell"] == 3
				) {
					updated_grid[x][y] = "Alive Cell";
				} else {
					updated_grid[x][y] = "Dead Cell";
				}
			}
		}
	}

	return updated_grid;
}
