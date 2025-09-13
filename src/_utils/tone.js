const LETTERS = ["C", "D", "E", "G", "A"];
const OCTAVES = [3, 4, 5];
const ACCIDENTAL = {
	active: "#",
	passive: "b",
	normal: "",
};

export function create_notes(updated_cells, active_cell, passive_cell) {
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

	let final_notes = letters.map(
		(note, index) => `${note}${octaves[index]}${accidentals[index]}`
	);

	// remove duplicates
	final_notes = [...new Set(final_notes)];

	// melodic filtering
	// pick at most 2 or 3 notes
	if (final_notes.length > 3) {
		// keep root-ish note (first in set)
		const root = final_notes[0];
		// randomly pick 1–2 more
		const others = final_notes
			.slice(1)
			.sort(() => Math.random() - 0.5)
			.slice(0, 2);
		final_notes = [root, ...others];
	}

	// sorting by the octave and order for smooth
	final_notes.sort((a, b) => {
		const parse = (n) => {
			const letter = n[0];
			const octave = parseInt(n.match(/\d+/)[0]);
			const order = LETTERS.indexOf(letter);
			return octave * 12 + order;
		};
		return parse(a) - parse(b);
	});

	// randomly introduce silence
	if (Math.random() < 0.2) {
		final_notes = [];
	}

	return final_notes;
}
