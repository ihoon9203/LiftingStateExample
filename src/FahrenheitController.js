import React from "react";
import { useState } from "react";

function Fahrenheit(props) {

    const [degree, setDegree] = useState(props.fahrenheit)
    const onFahrenheitChange = event => {
        setDegree(event.target.value)
        props.onTemperatureChange(event.target.value)
    }
    return(
        <form>
            <label htmlFor="fahrenheit">Fahrenheit:</label>
            <input type="text" id="fahrenheit" name="fahrenheit" value={props.fahrenheit} onChange={onFahrenheitChange}/>
        </form>
    )
}

export default Fahrenheit;