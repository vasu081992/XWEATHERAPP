import React, { useEffect,useState } from 'react'
import styles from "./Weather.module.css"
import axios from 'axios'

function Weather() {

const [ cityName,setcityName ] = useState('')

const [weatherdata,setWeatherdata] = useState()

console.log("cityName",cityName)

  const fetchCityData = async()=>{
 
     let api = `https://api.weatherapi.com/v1/current.json?key=6617752c666948cd8ea54255240204&q=${cityName}`
     let response = await axios.get(api)
     let data = await response.data

     console.log("weather data",data)



  }

 const handleInputCity = (e)=>{
  setcityName(e.target.value)

 }



  return (
    <div className={styles.backgroundPage}>
      
      <div className={styles.elems}> 
      <input placeholder='Enter city name' className={styles.input} value={cityName} onChange={handleInputCity}></input>
      <button onClick={fetchCityData}>Search</button>
      </div>

    </div>
  )
}

export default Weather