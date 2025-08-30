import { useState } from "react";
import styles from "./color-picker.module.css";

// colors = object with key (Name) value = color
export default function ColorPicker({ colors, on_color_selected }) {
	const [color, set_selected_color] = useState(null);

	return (
		<div className={styles["color-picker__wrapper"]}>
			<button className={styles["color-picker__select_btn"]}>
				{color ?? "Pick an item"}
			</button>

			<ul className={styles["color-picker__options"]}>
				{Object.keys(colors).map((item) => (
					<li key={item}>
						<button>
							<span
								className={styles["color-picker__sample"]}
								style={{ background: colors[item] }}
							/>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
