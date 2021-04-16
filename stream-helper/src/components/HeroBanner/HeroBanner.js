import React from 'react'; 
/* styling */
import '../../styles/HeroBanner.css'



function HeroBanner(props) {
    return(
        <>
        <div className="heroImageMain">
        </div>
        <div className="heroMainText">
            <h1 className="mainHeroTitle"> {props.heroTitle} </h1>
            <h2 className="mainHeroSubTitle">{props.heroText}</h2>
            <h2 className="mainHeroSubTitle">{props.heroExplanation}</h2>
        </div>
        </>
    )
}

export default HeroBanner;