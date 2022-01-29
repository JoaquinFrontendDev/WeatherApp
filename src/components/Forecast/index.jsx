import React from 'react'
import ForecastItem from '../ForecastItem'
import Loader from '../Loader/Loader'

const Forecast = ({ forecasts, loading, setForecasts }) => {
	return (
		<div className='w-full h-full flex flex-wrap items-center justify-center pt-12 gap-24'>
			{loading ? (
				<Loader />
			) : (
				forecasts.map((forecast, index) => (
					<ForecastItem
						key={crypto.randomUUID()}
						id={index}
						forecast={forecast.data}
						setForecasts={setForecasts}
					/>
				))
			)}
		</div>
	)
}

export default Forecast
