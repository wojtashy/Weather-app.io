import React from "react";

//Component which displays weather data for current day
function WeatherCard(props){
const weather = props.weather; //Seting new constant which contains weather data fetched

//Style for icon which shows wind direction. Arrow is rotated according to wind direction
const arrowDirection = {
    transform: `rotateZ(${weather.current.wind_deg}deg)`,
    transitionDuration: '0.4s'
}

return(  
    <div className="col-12 h-100  col-xl-5 col-lg-5 bg-dark bg-gradient bg-opacity-75 p-3 rounded shadow">
      <h4 className="">
        Weather for today ({ new Date().getDate() + "-"+  (new Date().getMonth()*1+1)})
      </h4>
      {console.log(weather)}
      <div>
        <p>
          Temperature: {weather.current.temp}° <ThermometerIcon temp={weather.current.temp}/>
        </p>
      </div>
      <div className="flex-row d-flex align-items-center">
        <p className="m-0 me-3">Wind: {weather.current.wind_speed} 
          km/h 
        </p> 
        <div className="d-flex flex-column align-items-center justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" style={arrowDirection} width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
          <p className="m-0 mt-1">
            {weather.current.wind_deg}°
          </p>
        </div>
      </div>
    </div>
)
}

//Function below returns thermometer icon, which is most accurate to temperature. 
const ThermometerIcon = (props) =>{
    const temp = props.temp;
    var icon;
    switch (true) {
        case temp <= 0:
             icon = 
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
              <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"/>
            </svg>
            break;
        case  temp <= 10:
              icon = 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-low" viewBox="0 0 16 16">
              <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
              <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
              </svg>
            break;
        case  temp <= 20 :
            icon = 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
              <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
              <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
            </svg>
            break;
        case temp >=20 :
            icon = 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-high" viewBox="0 0 16 16">
              <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
              <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
            </svg>
            break;
        default:
            icon = 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
             <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
             <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"/>
           </svg>
            
    }
    return(
        icon
    )
}
 export default WeatherCard;