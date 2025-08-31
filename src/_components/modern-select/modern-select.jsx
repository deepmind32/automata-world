import { useEffect, useState } from "react";
import styles from "./modern-select.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

// options should have color and info and key should be option name
export default function ModernSelect({
	name,
	type = "color",
	options,
	initial_option,
	on_option_change,
}) {
	const [selected_option, set_selected_option] = useState(initial_option);

	useEffect(() => {
		set_selected_option(initial_option);
	}, [initial_option]);

	const handle_option_select = (option_name) => {
		set_selected_option(option_name);
		on_option_change(option_name);
	};
	const handle_clear_option = () => {
		set_selected_option(undefined);
	};

	return (
		<div
			className={`${styles["option_picker"]} ${
				selected_option ? "" : styles["option_picker--inactive"]
			}`}
		>
			<p className={styles["option_picker__heading"]}>{name}</p>

			<ul className={styles["option_picker__options"]}>
				{Object.keys(options).map((option_name) => {
					const Icon = options[option_name].icon;

					return (
						<li
							key={option_name}
							className={
								selected_option == option_name ? styles["li--active"] : ""
							}
						>
							<button onClick={handle_option_select.bind(null, option_name)}>
								{type == "color" && (
									<div
										className={styles["option_picker__options__sample"]}
										style={{ backgroundColor: options[option_name].color }}
									/>
								)}
								{type == "icon" && <Icon size="2rem" />}
								<div className={styles["option_picker__options__info"]}>
									<p>{options[option_name].name ?? option_name}</p>
									{options[option_name]?.info ?? (
										<p style={{ width: 200 }}>{options[option_name].info}</p>
									)}
								</div>
							</button>

							<button onClick={handle_clear_option}>
								<AiOutlineCloseCircle size={"1.5rem"} />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
