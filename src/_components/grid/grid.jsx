import styles from "./grid.module.css";
import React, { useState } from "react";

const colors = {
	grey: "grey",
	blue: "blue",
};

export default function Grid({
	compute_next_generation,
	size = 10,
	default_value = 0,
	current_color = "blue",
}) {
	const [grid, set_grid] = useState(
		Array(size)
			.fill(default_value)
			.map((_) => Array(size).fill("grey"))
	);

	const handle_cell_clicked = (i, j) => {
		set_grid((prev) => {
			const new_prev = [...prev];
			new_prev[i][j] = current_color;
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
						{values.map((color_key, j) => (
							<button
								key={j}
								className={styles["grid__cell"]}
								onClick={handle_cell_clicked.bind(null, i, j)}
								style={{ backgroundColor: colors[color_key] }}
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
