import React from 'react'

const WeatherForm = ({ location, setLocation, handleSubmit }) => {
	return (
		<div className='max-w-full h-full flex flex-col justify-center items-center'>
			<h1 className='text-gray-800 font-bold text-6xl lg:text-7xl py-12 px-auto text-center'>
				Weather Forecast
			</h1>
			<div className='w-full h-52 flex flex-wrap gap-12 justify-center items-center'>
				<input
					type='text'
					placeholder='Location'
					value={location}
					className='lg:w-80 md:w-72 py-2 px-6 rounded-md text-xl'
					onChange={({ target }) => setLocation(target.value)}
				/>
				<button
					type='submit'
					onClick={handleSubmit}
					className='bg-sky-700 hover:bg-sky-900 transition-colors text-white text-xl py-2 px-6 rounded-md font-bold'>
					Search
				</button>
			</div>
		</div>
	)
}

export default WeatherForm
