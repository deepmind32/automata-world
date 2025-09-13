const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
// const OCTAVES = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const OCTAVES = [-1, 0, 1, 2];
const ACCIDENTAL = {
	active: "b",
	passive: "x",
	normal: "",
};

export function create_notes(updated_cells, active_cell, passive_cell) {
	// i represents Letter
	// j represents Octave
	// from and to represents Accidental

	const letters = updated_cells.map(
		(item) => LETTERS[item["i"] % LETTERS.length]
	);
	const octaves = updated_cells.map(
		(item) => OCTAVES[item["j"] % OCTAVES.length]
	);
	const accidentals = updated_cells.map((item) => {
		if (item["to"] == active_cell) {
			return ACCIDENTAL["active"];
		} else if (item["to"] == passive_cell) {
			return ACCIDENTAL["passive"];
		} else {
			return ACCIDENTAL["normal"];
		}
	});

	const final_notes = letters.map(
		(note, index) => `${note}${octaves[index]}${accidentals[index]}`
	);
	return final_notes;
}
