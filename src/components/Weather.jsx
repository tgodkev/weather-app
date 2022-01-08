import React, {useState} from 'react';

function Weather(){
    //state for day temps.
   const[currentTemp, setCurrentTemp] = useState('');
    const[feelsLike, setFeelsLike] = useState('');
    const[nextDay, setNextDay] = useState('');
    const[dayThree, setDayThree] = useState('');
    const[dayFour, setDayFour] = useState('');
    const[dayFive, setDayFive] = useState('');
    
    // state for time stamps.
    const [firstTimeStamp, setFirstTimeStamp] = useState('')
    const[secondTimeStamp, setSecondTimeStamp] = useState('');
    const[thirdTimeStamp, setThirdTimeStamp] = useState('');
    const[fourthTimeStamp, setFourthTimeStamp] =useState('');
    const[fifthTimeStamp, setFifthTimeStamp] = useState('');
    


    //state for weather icons.
    const[icon, setIcon] = useState('');
    const[secondIcon, setSecondIcon] = useState('');
    const[thirdIcon, setThirdIcon] = useState('');
    const[fourthIcon, setFourthIcon] = useState('');
    const[fifthIcon, setFifthIcon] = useState('');
    const[currentIcon, setCurrentIcon] = useState('');


    //state for user input for zip.
    const[city, setCity] = useState('');
    const[userCity, setUserCity] = useState('');
    const[cityName, setCityName] =  useState('');
    
    
    function handleClick(e){
        setUserCity(city);
        e.preventDefault();
    }

    async function getWeather(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + userCity + '&units=imperial&appid=301b282421d5ab0658e1410019293854');
        const weatherData = await response.json();
        
        //console.log(weatherData.list)

        setFeelsLike(weatherData.list[0].main.temp)
        setIcon(weatherData.list[0].weather[0].icon)
        setFirstTimeStamp(weatherData.list[0].dt_txt)

        setNextDay(weatherData.list[11].main.temp)
        setSecondIcon(weatherData.list[11].weather[0].icon)
        setSecondTimeStamp(weatherData.list[11].dt_txt)

        setDayThree(weatherData.list[19].main.temp)
        setThirdIcon(weatherData.list[19].weather[0].icon)
        setThirdTimeStamp(weatherData.list[19].dt_txt)
        
        setDayFour(weatherData.list[27].main.temp)
        setFourthIcon(weatherData.list[27].weather[0].icon)
        setFourthTimeStamp(weatherData.list[27].dt_txt)
        
        setDayFive(weatherData.list[35].main.temp)
        setFifthIcon(weatherData.list[35].weather[0].icon)
        setFifthTimeStamp(weatherData.list[35].dt_txt)
    
    }
    getWeather();


    async function currentWeather(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip='+ userCity + '&units=imperial&appid=301b282421d5ab0658e1410019293854')
        const currentData = await response.json();
        setCurrentTemp(currentData.main.temp)
        setCurrentIcon(currentData.weather[0].icon)
        setCityName(currentData.name)
        console.log(currentData)
    }

    currentWeather();
  
    //console.log(city)

    return(
        <div>
            <div className='input'>
                <form 
                onSubmit={handleClick}
                >
                    <h1>5 Day weather forcast for {cityName}.</h1>
                    <input type="text" 
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        placeholder='Enter Zip.'
                        className='search'
                    />
                    <button type='submit'> submit .</button>
                </form>
            </div>

            <div className='current'>
            <img src={'https://openweathermap.org/img/w/' + currentIcon + '.png'} alt="" />
            <h1> Current Temp. {currentTemp} °</h1>
            </div>

            <div className='one'>
            <img src={'https://openweathermap.org/img/w/' + icon + '.png'} alt="" />
            <h1> The temp will be {feelsLike} ° </h1>
            <h6> {firstTimeStamp}</h6>
            </div>
            <div className='two'>
            <img src={'https://openweathermap.org/img/w/' + secondIcon + '.png'} alt="" />
            <h1>The temp will be {nextDay}° </h1>
            <h6>{secondTimeStamp}</h6>
            </div>
            <div className='three'>
            <img src={'https://openweathermap.org/img/w/' + thirdIcon + '.png'} alt="" />
            <h1>the temp will be {dayThree}° </h1>
            <h6>{thirdTimeStamp}</h6>
            </div>
            <div className='four'>
            <img src={'https://openweathermap.org/img/w/' + fourthIcon + '.png'} alt="" />
            <h1>the temp will be {dayFour}° </h1>
            <h6>{fourthTimeStamp}</h6>
            </div>
            <div className='five'>
            <img src={'https://openweathermap.org/img/w/' + fifthIcon + '.png'} alt="" />
            <h1>the temp will be {dayFive}° </h1>
            <h6>{fifthTimeStamp}</h6>
            
            </div>
        </div>
    )
}

export default Weather;

//'https://api.openweathermap.org/data/2.5/weather?q=Cleveland&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5'
//setFeelsLike(weatherData.main.feels_like)


// code to reach weather icons.
//(weatherData.list[0].weather[0].icon)