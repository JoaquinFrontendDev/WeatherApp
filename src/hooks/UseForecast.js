import { useState } from 'react'
import axios from 'axios'

const API_KEY = '8f7504eadd46d6c5f5158b613519a91f'
const REQUEST_URL =
	'api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=8f7504eadd46d6c5f5158b613519a91f'

const useForecast = () => {
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [forecast, setForecast] = useState(null)

	const handleSubmit = async () => {
		const data = await axios.get(REQUEST_URL)
	}

	return {
		isError,
		isLoading,
		forecast,
		handleSubmit,
	}
}

export default useForecast
