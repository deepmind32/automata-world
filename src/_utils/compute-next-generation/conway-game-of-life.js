function copy_grid(grid) {
	return JSON.parse(JSON.stringify(grid));
}

export default function compute_next_generation(grid) {
	const updated_grid = copy_grid(grid);

	const temp = grid[0][0];
	updated_grid[0][0] = updated_grid[0][1];
	updated_grid[0][1] = grid[0][0];

	return updated_grid;
}
