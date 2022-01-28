import React, { useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import WeatherForm from './components/WeatherForm'
import axios from 'axios'

function App() {
	const [location, setLocation] = useState('')
	const [forecasts, setForecasts] = useState([])
	const [loading, setLoading] = useState(false)
	const REQUEST_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8f7504eadd46d6c5f5158b613519a91f`
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const response = await axios.get(REQUEST_URL)
			setForecasts([...forecasts, response])
			setLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="min-h-screen max-w-screen bg-[url('/src/assets/images/pexels-kaique-rocha-125510.jpg')] bg-center bg-no-repeat bg-cover box-border">
			<WeatherForm
				location={location}
				setLocation={setLocation}
				handleSubmit={handleSubmit}
				forecast={forecasts}
			/>
			<Forecast forecasts={forecasts} loading={loading} />
		</div>
	)
}
export default App
