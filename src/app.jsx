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
				<ColorPicker colors={current_grid_items} />
			</header>
			<Grid size={30} />
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
