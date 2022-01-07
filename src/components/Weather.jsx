import React, {useState} from 'react';

function Weather(){

    const[feelsLike, setFeelsLike] = useState('');
    const[nextDay, setNextDay] = useState('');
    const[dayThree, setDayThree] = useState('');
    const[icon, setIcon] = useState('');
    

    async function getWeather(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Cleveland&units=imperial&appid=301b282421d5ab0658e1410019293854');
        const weatherData = await response.json();
        
        console.log(weatherData.list[2].weather[0].icon)

        setFeelsLike(weatherData.list[0].main.feels_like)
        setNextDay(weatherData.list[1].main.feels_like)
        setDayThree(weatherData.list[2].main.feels_like)
        setIcon(weatherData.list[2].weather[0].icon)

        
    
    
    }
    getWeather();

    return(
        <div>
            <h1> currently feels  {feelsLike}.</h1>
            <img src={'https://openweathermap.org/img/' + icon + '.png'} alt="" />
            <h1>The temp will feel like {nextDay} tomorrow</h1>
            <h1>the temp will feel like {dayThree} saturday</h1>
        </div>
    )
}

export default Weather;

//'https://api.openweathermap.org/data/2.5/weather?q=Cleveland&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5'
//setFeelsLike(weatherData.main.feels_like)


// code to reach weather icons.
//(weatherData.list[0].weather[0].icon)