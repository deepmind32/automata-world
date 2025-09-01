import { copy_grid } from "../grid";

function find_ants(grid) {
	let found_indices = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			if (
				["Forward", "Backward", "Right", "Left"].some((word) =>
					grid[i][j].includes(word)
				)
			) {
				found_indices.push([i, j]);
			}
		}
	}

	return found_indices;
}

export default function compute_next_generation(grid) {
	const updated_grid = copy_grid(grid);

	const ant_locations = find_ants(grid);
	ant_locations.forEach(([x, y]) => {
		switch (grid[x][y]) {
			case "White Cell Forward":
				updated_grid[x][y] = "Black Cell";
				if (y + 1 < grid.length) {
					updated_grid[x][y + 1] = `${grid[x][y + 1].split(" ")[0]} Cell Right`;
				}
				break;

			case "White Cell Right":
				updated_grid[x][y] = "Black Cell";
				if (x + 1 < grid.length) {
					updated_grid[x + 1][y] = `${
						grid[x + 1][y].split(" ")[0]
					} Cell Backward`;
				}
				break;

			case "White Cell Backward":
				updated_grid[x][y] = "Black Cell";
				if (y - 1 >= 0) {
					updated_grid[x][y - 1] = `${grid[x][y - 1].split(" ")[0]} Cell Left`;
				}
				break;

			case "White Cell Left":
				updated_grid[x][y] = "Black Cell";
				if (x - 1 >= 0) {
					updated_grid[x - 1][y] = `${
						grid[x - 1][y].split(" ")[0]
					} Cell Forward`;
				}
				break;
		}

		switch (grid[x][y]) {
			case "Black Cell Forward":
				updated_grid[x][y] = "White Cell";
				if (y - 1 >= 0) {
					updated_grid[x][y - 1] = `${grid[x][y - 1].split(" ")[0]} Cell Left`;
				}
				break;

			case "Black Cell Right":
				updated_grid[x][y] = "White Cell";
				if (x - 1 >= 0) {
					updated_grid[x - 1][y] = `${
						grid[x - 1][y].split(" ")[0]
					} Cell Forward`;
				}
				break;

			case "Black Cell Backward":
				updated_grid[x][y] = "White Cell";
				if (y + 1 < grid.length) {
					updated_grid[x][y + 1] = `${grid[x][y + 1].split(" ")[0]} Cell Right`;
				}
				break;

			case "Black Cell Left":
				updated_grid[x][y] = "White Cell";
				if (x + 1 < grid.length) {
					updated_grid[x + 1][y] = `${
						grid[x + 1][y].split(" ")[0]
					} Cell Backward`;
				}
				break;
		}
	});

	return updated_grid;
}
