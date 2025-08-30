import { useState } from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { TbSettingsBolt } from "react-icons/tb";

import Grid from "./_components/grid/grid";
import styles from "./app.module.css";
import ModernSelect from "./_components/modern-select/modern-select";
import { get_all_automata, get_automata_info } from "./_utils/automata_types";

export default function App() {
	const all_automatas = get_all_automata();
	const [current_automata, set_current_automata] = useState(
		"Conway's Game of Life"
	);
	const current_automata_info = get_automata_info(current_automata);

	const [current_create_cell, set_current_create_cell] = useState(
		current_automata_info["initial_create_cell"]
	);

	const handle_create_cell_change = (cell_name) => {
		set_current_create_cell(cell_name);
	};
	const handle_automata_change = (automata_name) => {
		set_current_automata(automata_name);
		set_current_create_cell(
			get_automata_info(automata_name)["initial_create_cell"]
		);
	};

	return (
		<main className={styles["app"]}>
			<header className={styles["app__header"]}>
				<ModernSelect
					name="Atomata Game"
					type="icon"
					options={all_automatas}
					initial_option="Conway's Game of Life"
					on_option_change={handle_automata_change}
				/>
				<ModernSelect
					name={"Cell Type"}
					options={current_automata_info["cells"]}
					initial_option={current_automata_info["initial_create_cell"]}
					on_option_change={handle_create_cell_change}
				/>
			</header>

			<div className={styles["app__grid"]}>
				<Grid
					size={30}
					cells={current_automata_info["cells"]}
					default_cell={current_automata_info["default_cell"]}
					current_create_cell={current_create_cell}
				/>
			</div>
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
