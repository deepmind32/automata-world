import { useState } from "react";
import styles from "./color-picker.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

// colors = object with key (Name) value = color
export default function ColorPicker({
	cells,
	initial_create_cell,
	on_create_cell_change,
}) {
	const [selected_cell, set_selected_cell] = useState(initial_create_cell);

	const handle_color_btn_pressed = (cell_name) => {
		set_selected_cell(cell_name);
		on_create_cell_change(cell_name);
	};
	const handle_remove_color = () => {
		set_selected_cell(undefined);
	};

	return (
		<div
			className={`${styles["color_picker"]} ${
				selected_cell ? styles["color_picker--inactive"] : ""
			}`}
		>
			<p className={styles["color_picker__heading"]}>Cell Type</p>

			<ul className={styles["color_picker__options"]}>
				{Object.keys(cells).map((cell_name) => (
					<li
						key={cell_name}
						className={selected_cell == cell_name ? styles["li--active"] : ""}
					>
						<button onClick={handle_color_btn_pressed.bind(null, cell_name)}>
							<div
								className={styles["color_picker__options__sample"]}
								style={{ backgroundColor: cells[cell_name].color }}
							/>
							<div className={styles["color_picker__options__info"]}>
								<p>{cell_name}</p>
								<p>{cells[cell_name].info}</p>
							</div>
						</button>

						<button onClick={handle_remove_color}>
							<AiOutlineCloseCircle size={"1.5rem"} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
