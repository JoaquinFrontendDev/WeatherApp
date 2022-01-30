import React from 'react'

const ForecastItem = ({ forecast, setForecasts }) => {
	let icon = null
	let color = null
	if (typeof forecast.main !== 'undefined') {
		switch (forecast.weather[0].main) {
			case 'Clouds':
				icon = 'fa-cloud'
				color = 'text-slate-400'
				break
			case 'Thunderstorm':
				icon = 'fa-bolt'
				color = 'text-yellow-500'
				break
			case 'Drizzle':
				icon = 'fa-cloud-rain'
				color = 'text-slate-400'
				break
			case 'Rain':
				icon = 'fa-cloud-showers-heavy'
				color = 'text-slate-400'
				break
			case 'Snow':
				icon = 'fa-snowflake'
				color = 'text-neutral-50'
				break
			case 'Clear':
				icon = 'fa-sun'
				color = 'text-amber-400'
				break
			default:
				icon = 'fa-smog'
				color = 'text-gray-400'
		}
	}

	const handleDelete = ({ target }) => {
		console.log(target.id)
	}

	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl w-80 h-72 flex flex-col items-center gap-2 rounded-3xl relative'>
			<button
				className='h-6 w-6 grid place-items-center absolute right-4 top-4 text-rose-600 bg-black/40 rounded-full cursor-pointer'
				onClick={handleDelete}>
				<i className='fas fa-times'></i>
			</button>
			<h3 className='font-bold text-zinc-100 text-3xl md:text-3xl sm:text-4xl py-4 px-auto'>
				{`${forecast.name}, ${forecast.sys.country}`}
			</h3>
			<div className='w-full h-full grid grid-cols-2 col-md place-items-center border-b-2 border-white'>
				<i className={`fas ${icon} text-6xl lg:text-6xl ${color}`}></i>
				<p className='font-bold text-white text-6xl px-auto'>{`${Math.floor(
					+forecast.main.temp
				)}° C`}</p>
			</div>
			<div className='w-full h-full grid grid-cols-2 col-md place-items-center mb-3'>
				<p className='font-bold text-white text-xl px-auto'>{`Min: ${Math.floor(
					+forecast.main.temp_min
				)}° C`}</p>
				<p className='font-bold text-white text-xl px-auto'>{`Max: ${Math.floor(
					+forecast.main.temp_max
				)}° C`}</p>
				<p className='font-bold text-white text-xl px-auto'>
					{`Feels: ${Math.floor(+forecast.main.feels_like)}° C`}
				</p>
				<p className='font-bold text-white text-xl px-auto'>
					{`Humidity: ${Math.floor(+forecast.main.humidity)}%`}
				</p>
			</div>
		</div>
	)
}

export default ForecastItem
