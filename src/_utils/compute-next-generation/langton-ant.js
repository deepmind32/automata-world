import { copy_grid } from "../grid";

export default function compute_next_generation(grid) {
	const updated_grid = copy_grid(grid);

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid.length; y++) {
			const current_type = grid[x][y];

			if (current_type === "Black Cell") {
				// requries arrows
				// should rotate by 90 degrees in all directions
			} else if (current_type === "White Cell") {
			}
		}
	}

	return updated_grid;
}
