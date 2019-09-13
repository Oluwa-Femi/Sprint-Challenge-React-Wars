import React from "react"



const Actors = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <h2>About Me</h2>
                <p>Gender</p>
                <p>Birth Year</p>
                <p>Height</p>
            </div>
        </div>
    )
}

export default Actors;