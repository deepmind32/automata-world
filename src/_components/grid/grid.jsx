import styles from "./grid.module.css";
import React, { useState } from "react";

export default function Grid({
	compute_next_generation,
	cells,
	default_cell,
	current_create_cell,
	size = 10,
}) {
	const [grid, set_grid] = useState(
		Array(size)
			.fill(null)
			.map((_) => Array(size).fill(default_cell))
	);

	const handle_cell_clicked = (i, j) => {
		set_grid((prev) => {
			const new_prev = [...prev];
			new_prev[i][j] = current_create_cell;
			return new_prev;
		});
	};

	const handle_next_generation = () => {
		set_grid((prev) => compute_next_generation(prev));
	};

	return (
		<>
			<div
				className={styles["grid"]}
				style={{
					gridTemplateColumns: `repeat(${size}, 50px)`,
					gridTemplateRows: `repeat(${size}, 50px)`,
				}}
			>
				{grid.map((values, i) => (
					<React.Fragment key={i}>
						{values.map((cell_name, j) => (
							<button
								key={j}
								className={styles["grid__cell"]}
								onClick={handle_cell_clicked.bind(null, i, j)}
								style={{ backgroundColor: cells[cell_name].color }}
							>
								{i}, {j}
							</button>
						))}
					</React.Fragment>
				))}
			</div>
			<button onClick={handle_next_generation}>Next</button>
		</>
	);
}
