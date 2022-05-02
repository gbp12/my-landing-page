import styles from "../styles/Home.module.css"
import AdBox from "../components/AdBox"

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<p>felipez</p>

				<div className={styles.buttonContainer}>
					<button className={styles.buttonHeader}> Entrar</button>
					<p>||</p>
					<button className={styles.buttonHeader}>Registrarse</button>
				</div>
			</header>

			<AdBox />
		</>
	)
}
