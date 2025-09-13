import * as Tone from "tone";
import toast from "react-hot-toast";
import styles from "./grid.module.css";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
	get_grid_difference,
	get_non_default_cells_coordiantes,
	inverse_transform,
	transform,
} from "../../_utils/grid";
import { create_notes } from "../../_utils/tone";

const play_note = async (notes) => {
	await Tone.start();

	const synth = new Tone.Synth().toDestination();
	let now = Tone.now();


	notes.forEach((note, index) => {
		synth.triggerAttackRelease(note, "8n", now + index * 0.5);
	});
};

const Grid = forwardRef(
	(
		{
			compute_next_generation,
			time_step = 0,
			cells,
			default_cell,
			current_create_cell,
			size = 10,
			cell_width = 5,
			inactive_cells,
			on_all_cell_inactive,
			grid_active,
			active_cell,
			inactive_cell
		},
		ref
	) => {
		const [grid, set_grid] = useState(
			Array(size)
				.fill(null)
				.map((_) => Array(size).fill(default_cell))
		);

		useEffect(() => {
			set_grid(
				Array(size)
					.fill(null)
					.map((_) => Array(size).fill(default_cell))
			);
		}, [default_cell]);

		useEffect(() => {
			const updated_grid = Array(size)
				.fill(null)
				.map((_) => Array(size).fill(default_cell));
			const prev_size = grid.length;

			const non_default_cells = get_non_default_cells_coordiantes(
				grid,
				default_cell
			);
			const prev_non_default_cartesian = non_default_cells.map(([x, y]) =>
				transform(x, y, prev_size)
			);

			const updated_non_default = prev_non_default_cartesian.map(([x, y]) =>
				inverse_transform(x, y, size)
			);

			for (let i = 0; i < non_default_cells.length; i++) {
				const [prev_x, prev_y] = non_default_cells[i];
				const prev_cell_type = grid[prev_x][prev_y];

				const [new_x, new_y] = updated_non_default[i];
				if (new_x < 0 || new_y < 0 || new_x >= size || new_y >= size) continue;

				updated_grid[new_x][new_y] = prev_cell_type;
			}
			set_grid(updated_grid);
		}, [size]);

		useEffect(() => {
			if (time_step > 0) {
				// if everything is empty than donot run next generation
				const flattened_grid = grid.flat();
				const is_all_default = flattened_grid.reduce(
					(acc, item) => acc && inactive_cells.includes(item),
					true
				);
				is_all_default && on_all_cell_inactive();

				if (!is_all_default) {
					const updated_grid = compute_next_generation(grid);

					const updated_cells = get_grid_difference(grid, updated_grid, size);
					const notes = create_notes(updated_cells, active_cell, inactive_cell);
					play_note(notes);

					set_grid(updated_grid);
				}
			} else if (time_step === 0) {
				set_grid(
					Array(size)
						.fill(null)
						.map((_) => Array(size).fill(default_cell))
				);
			}
		}, [time_step]);

		const handle_cell_clicked = (i, j) => {
			if (grid_active) {
				set_grid((prev) => {
					const new_prev = [...prev];
					new_prev[i][j] = current_create_cell;
					return new_prev;
				});
			} else {
				toast.error("Pause the simulation before editing", {
					position: "top-left",
				});
			}
		};

		return (
			<div
				className={styles["grid"]}
				ref={ref}
				style={{
					gridTemplateColumns: `repeat(${size}, ${cell_width}px)`,
					gridTemplateRows: `repeat(${size}, ${cell_width}px)`,
					gap: cell_width / 10,
				}}
			>
				{grid.map((values, i) => (
					<React.Fragment key={i}>
						{values.map((cell_name, j) => {
							const Cell_icon = cells[cell_name]?.icon;

							return (
								<button
									key={j}
									className={styles["grid__cell"]}
									onClick={handle_cell_clicked.bind(null, i, j)}
									style={{
										width: cell_width,
										height: cell_width,
										backgroundColor: cells[cell_name]?.color,
									}}
								>
									{Cell_icon ? (
										<Cell_icon color="#9CA4A2" size={`${cell_width / 50}rem`} />
									) : (
										<></>
									)}
								</button>
							);
						})}
					</React.Fragment>
				))}
			</div>
		);
	}
);

export default Grid;
