import React, {useState} from "react"
function Triangle(props) {
    var [allSides, setAllSides] = useState( props.sides[0] + props.sides[1] + props.sides[2])
    console.log('sides', allSides)
    console.log('setsides', setAllSides)
    console.log(props)
    return(
        <div>
            <ul>
                {/* this is a comment */}
                <li onClick={(event)=> {
                    event.preventDefault();
                    
                }
                }>{allSides}</li>
                <li>{allSides}</li>
                <li>{props.sides[2]}</li>
            </ul>
            <button onClick={() => {setAllSides(allSides + 1)}}/>
        </div>
        
    )
}
export default Triangle