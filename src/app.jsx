import { useState } from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { TbSettingsBolt } from "react-icons/tb";
import { FaPause, FaPlay } from "react-icons/fa";

import Grid from "./_components/grid/grid";
import styles from "./app.module.css";
import ColorPicker from "./_components/color-picker/color-picker";

export default function App() {
	const [current_grid_items, set_current_grid_items] = useState({
		dead: "red",
		alive: "blue",
	});
	const [current_color, set_current_color] = useState("dead");
	const default_color = "dead";

	const handle_color_change = (color) => {
		set_current_color(color);
	};

	return (
		<main className={styles["app"]}>
			<header className={styles["app__header"]}>
				{/* <div className={styles["app__header__controls"]}>
					<button>
						<FaPlay />
					</button>
					<button>
						<FaPause />
					</button>
				</div> */}
				<ColorPicker
					colors={current_grid_items}
					default_color={default_color}
					on_color_selected={handle_color_change}
				/>
			</header>
			<Grid
				size={30}
				default_color={current_grid_items[default_color]}
				current_color={current_grid_items[current_color]}
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
