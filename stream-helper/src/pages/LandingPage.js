import React from 'react';
import '../styles/LandingPage.css';



function LandingPage() {
    return(
        <>
        <div className="landingContentGrid">
            <div className="landingIntroText">
                <h1> Tired Of Not Knowing What To Watch Next?  </h1>
                {/* info cards */}
                <div className="bp3-callout bp3-intent-success" >
                We'll Make A List Of Movies You've Watched and We'll Only Ever Recommend You New Movies!
                </div>
                <br/>
                <div className="bp3-callout bp3-intent-success" >
                We'll Tell You Which Streaming Platforms offer those Movies!
                </div>
                <br/>
                <div className="bp3-callout bp3-intent-success" >
                Forget searching endlessly for hours for the next thing to watch.
                </div>
          

            </div>


        <div className="userContentLanding">
            <h1> login and signup form here</h1>
        </div>
        </div>
        </>
    )
}

export default LandingPage
