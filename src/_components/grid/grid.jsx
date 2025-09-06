import toast from "react-hot-toast";
import styles from "./grid.module.css";
import React, { forwardRef, useEffect, useRef, useState } from "react";

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
		}, [default_cell, size]);

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
