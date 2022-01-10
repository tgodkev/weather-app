import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Weather(){
    //state for day temps.
   const[currentTemp, setCurrentTemp] = useState('');
    const[feelsLike, setFeelsLike] = useState('');
    const[nextDay, setNextDay] = useState('');
    const[dayThree, setDayThree] = useState('');
    const[dayFour, setDayFour] = useState('');
    const[dayFive, setDayFive] = useState('');
    
    

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
    

    //display content

    const[show, setShow] = useState(false)
    
    function handleClick(e){
        setUserCity(city);
        e.preventDefault();
        setShow(!show)
    }

    async function getWeather(){
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + userCity + '&units=imperial&appid=301b282421d5ab0658e1410019293854');
        const weatherData = await response.json();
        
        //console.log(weatherData.list)

        setFeelsLike(weatherData.list[3].main.temp)
        setIcon(weatherData.list[3].weather[0].icon)
       

        setNextDay(weatherData.list[11].main.temp)
        setSecondIcon(weatherData.list[11].weather[0].icon)
       
        setDayThree(weatherData.list[19].main.temp)
        setThirdIcon(weatherData.list[19].weather[0].icon)
        
        
        setDayFour(weatherData.list[27].main.temp)
        setFourthIcon(weatherData.list[27].weather[0].icon)
        
        
        setDayFive(weatherData.list[35].main.temp)
        setFifthIcon(weatherData.list[35].weather[0].icon)
        
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
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    const a = new Date();
    let one = weekday[a.getDay() + 1];
    
    const b = new Date();
    let two = weekday[b.getDay() +2];
    
    const c = new Date();
    let three = weekday[c.getDay() +3];

    const e = new Date();
    let four = weekday[e.getDay() + 4];

    const f = new Date();
    let fifth = weekday[f.getDay() +5];


    console.log(day)
  
    //console.log(city)

    return(
        <div className='weather'>
            <div className='input'>
                <form 
                onSubmit={handleClick}
                >
                <TextField id="outlined-basic" size='small' label="Enter Zip" variant="outlined" onChange={e => setCity(e.target.value)} className='search' />
                    
                
                    
                   <Button variant="contained" type='submit' size='small'>Submit.</Button>
                </form>
                {show && <h3 className='forcast'> 6 Day weather forcast for {cityName}.</h3>}
            </div>

         { show && <div className='current'>
            <h2> {day}</h2>
            <img src={'https://openweathermap.org/img/w/' + currentIcon + '.png'} alt="" />
             <h2> {currentTemp}°F  </h2>
            </div>}

           {show &&  <div className='one'>
           <h2> {one}</h2>
              <img src={'https://openweathermap.org/img/w/' + icon + '.png'} alt="" />
            <h2> {feelsLike}°F </h2>
            </div>}

            {show && <div className='two'>
            <h2> {two}</h2>
            <img src={'https://openweathermap.org/img/w/' + secondIcon + '.png'} alt="" />
            <h2> {nextDay}°F </h2>
            </div>}

            {show && <div className='three'>
            <h2> {three}</h2>
            <img src={'https://openweathermap.org/img/w/' + thirdIcon + '.png'} alt="" />
            <h2> {dayThree}°F </h2>
            </div>}

           {show && <div className='four'>
           <h2> {four}</h2>
            <img src={'https://openweathermap.org/img/w/' + fourthIcon + '.png'} alt="" />
            <h2> {dayFour}°F </h2>
            </div>}

            {show && <div className='five'>
            <h2> {fifth}</h2>
            <img src={'https://openweathermap.org/img/w/' + fifthIcon + '.png'} alt="" />
            <h2> {dayFive}°F </h2>
            
            </div>}
        </div>
    )
}

export default Weather;

//'https://api.openweathermap.org/data/2.5/weather?q=Cleveland&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5'
//setFeelsLike(weatherData.main.feels_like)


// code to reach weather icons.
//(weatherData.list[0].weather[0].icon)