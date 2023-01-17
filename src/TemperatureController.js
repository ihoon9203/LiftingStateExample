import React, { useState } from "react";
import Fahrenheit from "./FahrenheitController";
import Celsius from "./CelsiusController";

var temperature = {
    celsius: 0,
    fahrenheit: 32
}

function TemperatureController() {
    const [temp, setTemp] = useState(temperature)
    
    function handleCelsiusChange(celsius) {
        let deepTemp = {...temp}
        deepTemp = {
            celsius: celsius,
            fahrenheit: celsius * (9/5) + 32
        }
        setTemp(deepTemp)
    }
    function handleFahrenheitChange(fahrenheit) {
        let deepTemp = {...temp}
        deepTemp = {
            celsius: (fahrenheit - 32) * (5/9),
            fahrenheit: fahrenheit
        }
        setTemp(deepTemp)
    }
    function renderTempChanges() {
        return(
            <div>
                <Celsius celsius={temp.celsius} onTemperatureChange={(newCelsiusTemp) => handleCelsiusChange(newCelsiusTemp)}/>
                <Fahrenheit fahrenheit={temp.fahrenheit} onTemperatureChange={(newFahrenheitTemp) => handleFahrenheitChange(newFahrenheitTemp)}/>
            </div>
        )
    }
    return(
        <div>
            {renderTempChanges()}
        </div>
    )
}
export default TemperatureController;