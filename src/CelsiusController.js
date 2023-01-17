import React from "react";
import { useState } from "react";

function Celsius(props) {

    const [degree, setDegree] = useState(props.celsius)
    const onCelsiusChange = event => {
        setDegree(event.target.value)
        props.onTemperatureChange(event.target.value)
    }
    return(
        <form>
            <label htmlFor="celsius">Celsius:</label>
            <input type="text" id="celsius" name="celsius" value={props.celsius} onChange={onCelsiusChange}/>
        </form>
    )
}
export default Celsius;