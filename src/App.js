import { useState } from 'react'
import styles from './App.module.css'
import WeatherForecast from './components/WeatherForecast'
import WeatherForm from './components/WeatherForm'

function App() {
	const [location, setLocation] = useState('')

	return (
		<div className={styles.App}>
			<WeatherForm location={location} setLocation={setLocation} />
			<WeatherForecast />
		</div>
	)
}

export default App
