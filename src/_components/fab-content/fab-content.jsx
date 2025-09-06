import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./fab-content.module.css";

export default function FabContent({ title, children, on_close }) {
	return (
		<div className={styles["fab_content"]}>
			<div className={styles["fab_content__header"]}>
				<h3>{title}</h3>
				<button onClick={on_close}>
					<AiOutlineCloseCircle size="1.5rem" color="#a99e9e" />
				</button>
			</div>

			<div className={styles["fab_content__main"]}>{children}</div>
		</div>
	);
}
