import { useState } from "react";
import Range from "../range/range";
import styles from "./settings.module.css";

export default function Settings({ default_value, on_change_settings }) {
	const [settings, set_settings] = useState(default_value);

	const handle_on_input_change = (name, value) => {
		set_settings((prev) => ({ ...prev, [name]: +value }));
		on_change_settings({ ...settings, [name]: +value });
	};

	return (
		<div className={styles["settings"]}>
			<h3>Settings</h3>

			<div className={styles["settings__input"]}>
				<Range
					min={10}
					max={200}
					default_value={default_value["cells"]}
					label="Cells Per Side"
					suffix=""
					on_change={handle_on_input_change.bind(null, "cells")}
				/>
				<Range
					min={10}
					max={50}
					default_value={default_value["cell_width"]}
					label="Cell Size"
					suffix="px"
					on_change={handle_on_input_change.bind(null, "cell_width")}
				/>
				<Range
					min={0.25}
					max={4}
					default_value={default_value["simulation_speed"]}
					label="Simulation Speed"
					suffix="x"
					on_change={handle_on_input_change.bind(null, "simulation_speed")}
				/>
			</div>
		</div>
	);
}
