import React from 'react';

function City(props) {
    const { updateCity, fetchWeather } = props;
  return (
    <>
    <img src={"./icons/perfect-day.svg"} alt="" className='weatherlogo' />
    <span className='citylabel'>Find Weather Of Your City</span>
    <form onSubmit={fetchWeather} className="form">
        <input onChange={(e) => updateCity(e.target.value)} placeholder="City" className='input'/>
        <button type={"submit"} className='button'>Search</button>
    </form>
    </>
  )
}

export default City;