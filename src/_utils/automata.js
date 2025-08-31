export function get_neighbours(x, y, max) {
	const candidate_neighbours = [
		[x - 1, y - 1],
		[x, y - 1],
		[x + y - 1],
		[x - 1, y],
		[x + 1, y],
		[x - 1, y + 1],
		[x, y + 1],
		[x + 1, y + 1],
	];

	const valid_neigbours = candidate_neighbours.filter((coord) => {
		const [x, y] = coord;

		if (x < 0 || y < 0) return false;
		if (x >= max.length || y > max.length) return false;

		return true;
	});

	return valid_neigbours;
}
