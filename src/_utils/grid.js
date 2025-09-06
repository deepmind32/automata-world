export function copy_grid(grid) {
	return JSON.parse(JSON.stringify(grid));
}

// transforms from normal array representation to coordinate system where 0, 0 starts at middle
export function transform(x, y, grid_size) {
	const half = Math.floor(grid_size / 2);
	return [x - half, y - half];
}

export function inverse_transform(x, y, grid_size) {
	const half = Math.floor(grid_size / 2);
	return [x + half, y + half];
}

export function get_non_default_cells_coordiantes(grid, default_cell) {
	const non_default_cells = [];

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid.length; y++) {
			if (grid[x][y] !== default_cell) {
				non_default_cells.push([x, y]);
			}
		}
	}

	return non_default_cells;
}
