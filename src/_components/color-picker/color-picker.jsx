import { useState } from "react";
import styles from "./color-picker.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

// colors = object with key (Name) value = color
export default function ColorPicker({
	colors,
	default_color,
	on_color_selected,
}) {
	const [color, set_color] = useState(null);
	const [selected_color, set_selected_color] = useState(default_color);

	const handle_color_btn_pressed = (color) => {
		set_selected_color(color);
		on_color_selected(color);
	};
	const handle_remove_color = () => {
		set_selected_color(undefined);
	};

	return (
		<div
			className={`${styles["color_picker"]} ${
				selected_color ?? styles["color_picker--inactive"]
			}`}
		>
			<p className={styles["color_picker__heading"]}>Cell Type</p>

			<ul className={styles["color_picker__options"]}>
				{Object.keys(colors).map((item) => (
					<li
						key={item}
						className={selected_color == item && styles["li--active"]}
					>
						<button onClick={handle_color_btn_pressed.bind(null, item)}>
							<div
								className={styles["color_picker__options__sample"]}
								style={{ backgroundColor: colors[item] }}
							/>
							<div className={styles["color_picker__options__info"]}>
								<p>{item}</p>
								<p>Represents alive</p>
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
