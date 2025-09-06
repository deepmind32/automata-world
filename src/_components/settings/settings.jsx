import { useState } from "react";
import Range from "../range/range";

export default function Settings({ default_value, on_change_settings }) {
	const [settings, set_settings] = useState(default_value);

	const handle_on_input_change = (name, value) => {
		set_settings((prev) => ({ ...prev, [name]: +value }));
		on_change_settings({ ...settings, [name]: +value });
	};

	return (
		<>
			<Range
				min={10}
				max={500}
				step={5}
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
				max={10}
				default_value={default_value["simulation_speed"]}
				label="Simulation Speed"
				suffix="x"
				on_change={handle_on_input_change.bind(null, "simulation_speed")}
				step={0.25}
			/>
		</>
	);
}
