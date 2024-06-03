import React, { useEffect,useState } from 'react'
import styles from "./Weather.module.css"
import axios from 'axios'
import WeatherCard from './WeatherCard'
import './Weather.css'

function Weather() {

const [ cityName,setcityName ] = useState('')

const [weatherdata,setWeatherdata] = useState(null)

const[filteredResult,setfilteredResult] = useState([])

const [loading,setloading]=useState(false)


console.log("data fetched needed to show on UI",filteredResult)

useEffect(() => {
  if (weatherdata) {
    const { condition:{text},temp_c,humidity,wind_kph } = weatherdata.current;
    setfilteredResult([{ condition:{text}},{temp_c},{humidity},{wind_kph }] )
  }
}, [weatherdata]);



console.log("cityName",cityName)
console.log("weather data",weatherdata)

  const fetchCityData = async()=>{
 try{
  setloading(true)
     let api = `https://api.weatherapi.com/v1/current.json?key=6617752c666948cd8ea54255240204&q=${cityName}`
     let response = await axios.get(api)
     let data = await response.data
     setWeatherdata(data)
     setloading(false)

 }
 catch(e){
  console.log("Error in fetcing data",e.message)
  alert("Failed to fetch weather data,Check input city name")
 }
  }

 const handleInputCity = (e)=>{
  setcityName(e.target.value)

 }



  return (
    <div className={styles.backgroundPage}>
      
      <div className={styles.elems}>
      <input type="text" placeholder='Enter city name' className={styles.input} value={cityName} onChange={handleInputCity}></input>
      <button onClick={fetchCityData}>Search</button>
      </div>
{!loading && (
  <div className='weather-cards'>
{ filteredResult && (
filteredResult.map((prop)=>(
<WeatherCard prop={prop}/>
))
)
}
</div>
)}

{loading && 
(

<p>Loading data...</p>


)
}

    </div>
  )
}

export default Weather