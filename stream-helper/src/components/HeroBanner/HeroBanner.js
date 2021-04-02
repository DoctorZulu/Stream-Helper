import React from 'react'; 
/* styling */
import '../../styles/HeroBanner.css'
/* img import */
import heroBannerImageMain from '../../media/heroBannerImageMain.jpg'

function HeroBanner() {
    return(
        <>
        <div className="heroImageMain">
        </div>
        <div className="heroMainText">
            <h1 className="mainHeroTitle"> Welcome To StreamHelper</h1>
            <h2 className="mainHeroSubTitle">Discover Countless New Movies <br/> Save Them To Your List <br/> Discard Ones You've Already Seen</h2>
        </div>
        </>
    )
}

export default HeroBanner;