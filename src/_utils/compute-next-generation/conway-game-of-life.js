import { get_neighbours } from "../automata";

function copy_grid(grid) {
	return JSON.parse(JSON.stringify(grid));
}

export default function compute_next_generation(grid) {
	const updated_grid = copy_grid(grid);

	console.log(get_neighbours(0, 0, grid.length));
	// for (let y = 0; y<grid.length; y++) {
	// 	for (let x=0; x<grid.length; x++) {

	// 	}
	// }
	return updated_grid;
}
