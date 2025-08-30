import { useState } from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { TbSettingsBolt } from "react-icons/tb";
import { FaPause, FaPlay } from "react-icons/fa";

import Grid from "./_components/grid/grid";
import styles from "./app.module.css";
import ColorPicker from "./_components/color-picker/color-picker";
import { get_automata_info } from "./_utils/automata_types";

export default function App() {
	const current_automata = "Conway's Game of Life";
	const current_automata_info = get_automata_info(current_automata);

	const [current_create_cell, set_current_create_cell] = useState(
		current_automata_info["initial_create_cell"]
	);

	const handle_create_cell_change = (cell_name) => {
		set_current_create_cell(cell_name);
	};

	return (
		<main className={styles["app"]}>
			<header className={styles["app__header"]}>
				{/* <ColorPicker
					cells={current_automata_info["cells"]}
					initial_create_cell={current_automata_info["initial_create_cell"]}
					on_create_cell_change={handle_create_cell_change}
				/> */}
			</header>
			<Grid
				size={30}
				cells={current_automata_info["cells"]}
				default_cell={current_automata_info["default_cell"]}
				current_create_cell={current_create_cell}
			/>
			<div className={styles["app__help__wrapper"]}>
				<button className={styles["app__fab"]}>
					<LuBadgeHelp size="3rem" />
				</button>
			</div>

			<div className={styles["app__settings__wrapper"]}>
				<button className={styles["app__fab"]}>
					<TbSettingsBolt size="3rem" />
				</button>
			</div>
		</main>
	);
}
