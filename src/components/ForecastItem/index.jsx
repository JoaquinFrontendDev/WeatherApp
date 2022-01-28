import React from 'react'

const ForecastItem = ({ forecast }) => {
	let icon = null
	if (typeof forecast.main !== 'undefined') {
		switch (forecast.weather[0].main) {
			case 'Clouds':
				icon = 'fa-cloud'
				break
			case 'Thunderstorm':
				icon = 'fa-bolt'
				break
			case 'Drizzle':
				icon = 'fa-cloud-rain'
				break
			case 'Rain':
				icon = 'fa-cloud-shower-heavy'
				break
			case 'Snow':
				icon = 'fa-snow-flake'
				break
			case 'Clear':
				icon = 'fa-sun'
				break
			default:
				icon = 'fa-smog'
		}
	}

	return (
		<div className='bg-white/40 shadow-xl w-96 h-72 flex flex-col items-center gap-6 rounded-3xl relative'>
			<h3 className='font-bold text-stone-900 text-4xl py-6 px-auto'>
				{`${forecast.name}, ${forecast.sys.country}`}
			</h3>
			<div className='w-full h-full grid grid-cols-2 col-md place-items-center'>
				<i className={`fas ${icon} text-6xl text-stone-900`}></i>
				<p className='font-bold text-stone-900 text-6xl px-auto'>{`${Math.floor(
					+forecast.main.temp
				)}° C`}</p>
			</div>
			<div className='w-full h-full grid grid-cols-2 col-md place-items-center mb-3'>
				<p className='font-bold text-stone-900 text-xl px-auto'>{`Min: ${Math.floor(
					+forecast.main.temp_min
				)}° C`}</p>
				<p className='font-bold text-stone-900 text-xl px-auto'>{`Max: ${Math.floor(
					+forecast.main.temp_max
				)}° C`}</p>
				<p className='font-bold text-stone-900 text-xl px-auto'>
					{`Feels: ${Math.floor(+forecast.main.feels_like)}° C`}
				</p>
				<p className='font-bold text-stone-900 text-xl px-auto'>
					{`Humidity: ${Math.floor(+forecast.main.humidity)}%`}
				</p>
			</div>
		</div>
	)
}

export default ForecastItem
