import React from 'react';
import WeatherInfoComponent from './WeatherInfoComponent';
import {WeatherIcons} from "./WeatherIcons";


function Weather(props) {
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  return (
    <>
    <div className='weathercontainer'>
    <span className='condition'>
    <span >{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
    {`  |  ${weather?.weather[0].description}`}
    </span>
    <img src={WeatherIcons[weather?.weather[0].icon]} alt="weathericon" className='weathericon'/>
    </div>
    <span className='location'>{`${weather?.name}, ${weather?.sys?.country}`}</span>
    <span className='weatherlabel'>Weather Info</span>
    <div className='weatherinfocontainer'>
    <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
    <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
    <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
    <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
    </div>

    </>
  )
}

export default Weather;