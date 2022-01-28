import React from 'react'
import ForecastItem from '../ForecastItem'
import Loader from '../Loader/Loader'

const Forecast = ({ forecasts, loading }) => {
	return (
		<div className='w-full h-full flex flex-wrap items-center justify-center pt-12 gap-24'>
			{loading ? (
				<Loader />
			) : (
				forecasts.map((forecast, index) => (
					<ForecastItem key={index} forecast={forecast.data} />
				))
			)}
		</div>
	)
}

export default Forecast
