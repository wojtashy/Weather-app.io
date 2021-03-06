import React from "react";

//component which display sunrise and sunset time
const SunRise = (props) =>{

return(
    <div className="bg-dark bg-opacity-75 h-100 bg-gradient m-3 p-3 rounded shadow col-12 col-xl-5">
        <div className="row align-items-cetner justify-content-center">
            <div className="col-3 d-flex justify-content-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" className="sunRise-icon bi bi-brightness-alt-high" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z"/>
                </svg>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="sunRise-icon bi bi-arrow-right" fill="currentColor"  viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </div>
            <div className="col-3 d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="sunRise-icon bi bi-moon-stars" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                </svg>
            </div> 
        </div>
        <div className="row align-items-cetner justify-content-center">
            <div className="col-3 d-flex justify-content-center"> 
                <p>
                    Sunrise: { convertTimeStamp(props.sunrise,props.offset)} 
                </p>
            </div>
            <div className="col-2 d-flex justify-content-center">     
            </div>
            <div className="col-3 d-flex justify-content-center">
                <p>
                    Sunset: {convertTimeStamp(props.sunset,props.offset)} 
                </p>
            </div>
        </div>
    </div>
)
}

//Function that converts sunset and sunrise hours from utc to local time
const convertTimeStamp =(unix,offset) =>{
    var time = new Date((unix -(-offset+3600))*1000);
    console.log(offset-1)
    var hours = time.getHours() < 10 ? '0'+ time.getHours() : time.getHours();
    var minutes = time.getMinutes() < 10 ? '0'+ time.getMinutes() : time.getMinutes();
    return(
            hours+":"+minutes
    )
}

export default SunRise;