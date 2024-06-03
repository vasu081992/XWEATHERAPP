import React from 'react'
import './Weather.css'

function WeatherCard({prop}) {
  return (
    <div className="weather-card">
      {prop.condition && 
      <div className="card-texts">
            <p className='title'> Condition </p>
            <p>{prop.condition.text}</p>
        </div>}
      {prop.temp_c &&
      
      <div className="card-texts">
           <p className='title'> Temperature</p>
           <p>{prop.temp_c}°c</p>       
       </div>}
      {prop.humidity && 
      <div className="card-texts">
      <p className='title'> Humidity</p>
           <p>{prop.humidity}%</p>   
        </div>}
      {prop.wind_kph && 
      <div className="card-texts">
          <p className='title'> Wind speed</p>
           <p>{prop.wind_kph} kph</p>  
        </div>}
    </div>

  )
}

export default WeatherCard