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

export function get_grid_difference(grid, updated_grid, size) {
	const [flattened_grid, flattened_updated_grid] = [
		grid.flat(),
		updated_grid.flat(),
	];
	const grid_indexes = Array(flattened_grid.length)
		.fill(null)
		.map((_, index) => index);
	const updated_grid_indexes = grid_indexes.filter(
		(item) => flattened_grid[item] !== flattened_updated_grid[item]
	);
	const updated_grid_info = updated_grid_indexes.map((index) => ({
		i: Math.floor(index / size),
		j: index % size,
		from: flattened_grid[index],
		to: flattened_updated_grid[index],
	}));

	return updated_grid_info;
}
