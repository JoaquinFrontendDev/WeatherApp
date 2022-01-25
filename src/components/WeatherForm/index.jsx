import React from 'react'
import styles from './WeatherForm.module.css'

const WeatherForm = ({ location, setLocation }) => {
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(location)
	}
	return (
		<div className={styles.weather_form_container}>
			<h1>Weather Forecast</h1>
			<div className={styles.input_container}>
				<input
					type='text'
					placeholder='Insert Location'
					value={location}
					onChange={({ target }) => setLocation(target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
		</div>
	)
}

export default WeatherForm
