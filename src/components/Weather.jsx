import React, {useState} from 'react';

function Weather(){

    const[feelsLike, setFeelsLike] = useState('');
    const[nextDay, setNextDay] = useState('');
    const[dayThree, setDayThree] = useState('');
    const[dayFour, setDayFour] = useState('');
    const[dayFive, setDayFive] = useState('');
    
    
    
    
    const[icon, setIcon] = useState('');
    const[secondIcon, setSecondIcon] = useState('');
    const[thirdIcon, setThirdIcon] = useState('');
    const[fourthIcon, setFourthIcon] = useState('');
    const[fifthIcon, setFifthIcon] = useState('');

    const[city, setCity] = useState('');
    const[userCity, setUserCity] = useState('');
    
    
    function handleClick(e){
        setUserCity(city);
        e.preventDefault();
    }

    async function getWeather(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userCity + '&units=imperial&appid=301b282421d5ab0658e1410019293854');
        const weatherData = await response.json();
        
        //console.log(weatherData.list[2])

        setFeelsLike(weatherData.list[0].main.temp)
        setIcon(weatherData.list[0].weather[0].icon)

        setNextDay(weatherData.list[1].main.temp)
        setSecondIcon(weatherData.list[1].weather[0].icon)


        setDayThree(weatherData.list[2].main.temp)
        setThirdIcon(weatherData.list[2].weather[0].icon)
        
        setDayFour(weatherData.list[3].main.temp)
        setFourthIcon(weatherData.list[3].weather[0].icon)
        
        setDayFive(weatherData.list[4].main.temp)
        setFifthIcon(weatherData.list[4].weather[0].icon)
    
    }
    getWeather();

    console.log(city)

    return(
        <div>
            <div className='input'>
                <form 
                onSubmit={handleClick}
                >
                    <h1>5 Day weather forcast.</h1>
                    <input type="text" 
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        placeholder='Enter City.'
                    />
                    <button type='submit'> submit .</button>
                </form>
            </div>
            <div className='one'>
            <h1> current temp is.  {feelsLike} °</h1>
            <img src={'https://openweathermap.org/img/w/' + icon + '.png'} alt="" />
            </div>
            <div className='two'>
            <h1>The temp will be {nextDay}° </h1>
            <img src={'https://openweathermap.org/img/w/' + secondIcon + '.png'} alt="" />
            </div>
            <div className='three'>
            <h1>the temp will be {dayThree}° </h1>
            <img src={'https://openweathermap.org/img/w/' + thirdIcon + '.png'} alt="" />
            </div>
            <div className='four'>
            <h1>the temp will be {dayFour}° </h1>
            <img src={'https://openweathermap.org/img/w/' + fourthIcon + '.png'} alt="" />
            </div>
            <div className='five'>
            <h1>the temp will be {dayFive}° </h1>
            <img src={'https://openweathermap.org/img/w/' + fifthIcon + '.png'} alt="" />
            </div>
        </div>
    )
}

export default Weather;

//'https://api.openweathermap.org/data/2.5/weather?q=Cleveland&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5'
//setFeelsLike(weatherData.main.feels_like)


// code to reach weather icons.
//(weatherData.list[0].weather[0].icon)