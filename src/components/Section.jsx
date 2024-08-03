import React from "react"
import './Section.css'

function Section({title='title', info='info'}){
    return(
        <>
        <div className="data">
            <h2>{title}</h2>
            <p> {info} </p>
        </div>

        </>
    )

}

export default Section;