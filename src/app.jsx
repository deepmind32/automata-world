import { useState, useEffect, useRef } from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { TbSettingsBolt } from "react-icons/tb";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { BiSkipNextCircle } from "react-icons/bi";

import Grid from "./_components/grid/grid";
import styles from "./app.module.css";
import ModernSelect from "./_components/modern-select/modern-select";
import {
	get_all_automata,
	get_automata_cell_type,
	get_automata_info,
} from "./_utils/automata_types";
import get_next_generation_step from "./_utils/compute-next-generation";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
	const scroll_container_ref = useRef(null);
	const grid_ref = useRef(null);

	useEffect(() => {
		const container = scroll_container_ref.current;
		const grid = grid_ref.current;

		if (container && grid) {
			const scroll_left = (grid.scrollWidth - container.clientWidth) / 2;
			const scroll_top = (grid.scrollHeight - container.clientHeight) / 2;

			container.scrollTo({
				left: scroll_left,
				top: scroll_top,
				behavior: "smooth",
			});
		}
	}, []);

	const all_automatas = get_all_automata();
	const [current_automata, set_current_automata] = useState(
		"Conway's Game of Life"
	);
	const current_automata_info = get_automata_info(current_automata);

	const [current_create_cell, set_current_create_cell] = useState(
		current_automata_info["initial_create_cell"]
	);
	const [generation_step, set_generation_step] = useState(0);
	const [generation_timer_running, set_generation_timer_running] =
		useState(false);

	const handle_create_cell_change = (cell_name) => {
		set_current_create_cell(cell_name);
	};
	const handle_automata_change = (automata_name) => {
		set_current_automata(automata_name);
		set_current_create_cell(
			get_automata_info(automata_name)["initial_create_cell"]
		);
	};

	const handle_app_controls_clicked = (type) => {
		if (type === "pause") {
			set_generation_timer_running(false);
		} else if (type === "play") {
			set_generation_timer_running(true);
		} else if (type === "next") {
			set_generation_timer_running(false);
			set_generation_step((prev) => prev + 1);
		} else if (type === "reset") {
			set_generation_timer_running(false);
			set_generation_step(0);
		}
	};

	const handle_all_cell_inactive = () => {
		set_generation_timer_running(false);
		generation_timer_running &&
			toast(current_automata_info["death_note"], {
				icon: current_automata_info["death_emoji"],
				position: "top-left",
			});
	};

	useEffect(() => {
		const generation_step_intervals = setInterval(() => {
			generation_timer_running && set_generation_step((prev) => prev + 1);
		}, 250);

		return () => {
			clearInterval(generation_step_intervals);
		};
	}, [generation_timer_running]);

	return (
		<main className={styles["app"]}>
			<Toaster />
			<header className={styles["app__header"]}>
				<ModernSelect
					name="Atomata Game"
					type="icon"
					options={all_automatas}
					initial_option="Conway's Game of Life"
					on_option_change={handle_automata_change}
				/>

				<div className={styles["app__header__controls"]}>
					{generation_timer_running && (
						<button onClick={handle_app_controls_clicked.bind(null, "pause")}>
							<FaRegCirclePause size="2rem" />
						</button>
					)}
					{!generation_timer_running && (
						<button onClick={handle_app_controls_clicked.bind(null, "play")}>
							<FaRegCirclePlay size="2rem" />
						</button>
					)}
					<button onClick={handle_app_controls_clicked.bind(null, "next")}>
						<BiSkipNextCircle
							size="2.3rem"
							color={generation_timer_running ? "#9CA4A2" : null}
						/>
					</button>
					<button onClick={handle_app_controls_clicked.bind(null, "reset")}>
						<RiResetLeftFill size="1.8rem" />
					</button>
				</div>

				<ModernSelect
					name={"Cell Type"}
					options={get_automata_cell_type(current_automata)}
					initial_option={current_automata_info["initial_create_cell"]}
					on_option_change={handle_create_cell_change}
				/>
			</header>

			<div className={styles["app__grid"]} ref={scroll_container_ref}>
				<Grid
					compute_next_generation={get_next_generation_step(current_automata)}
					ref={grid_ref}
					time_step={generation_step}
					size={30}
					cells={current_automata_info["cells"]}
					default_cell={current_automata_info["default_cell"]}
					current_create_cell={current_create_cell}
					inactive_cells={current_automata_info["inactive_cells"]}
					on_all_cell_inactive={handle_all_cell_inactive}
					grid_active={!generation_timer_running}
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
