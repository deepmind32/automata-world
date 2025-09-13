const LETTERS = ["C", "D", "E", "G", "A"];
const OCTAVES = [3, 4, 5];
const ACCIDENTAL = {
	active: "#",
	passive: "b",
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
	console.log(final_notes)
	return final_notes;
}
