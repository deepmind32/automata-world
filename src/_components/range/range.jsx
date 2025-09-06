import { useState } from "react";
import styles from "./range.module.css";

export default function Range({
	label,
	suffix,
	min,
	max,
	default_value,
	on_change,
}) {
	const [value, set_value] = useState(default_value);

	const handle_range_change = (event) => {
		set_value(event.target.value);
		on_change(event.target.value);
	};

	return (
		<div className={styles["slider__wrapper"]}>
			<div className={styles["slider__label"]}>
				<p>{label}</p>
				<p>
					{value}
					{suffix}
				</p>
			</div>
			<div className={styles["slider__input__wrapper"]}>
				<input
					type="range"
					min={min}
					max={max}
					className={styles["slider"]}
					defaultValue={default_value}
					onChange={handle_range_change}
				/>
				<div className={styles["slider__info"]}>
					<p>{min}</p>
					<p>{max}</p>
				</div>
			</div>
		</div>
	);
}
