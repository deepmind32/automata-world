export default function compute_next_generation(grid) {
	const updated_grid = [...grid];
	updated_grid[0][0] = updated_grid[0][1];
	updated_grid[0][1] = grid[0][0];

	return updated_grid;
}
