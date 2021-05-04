import React, { useEffect, useState } from "react";
/* styling */
import "../../styles/HeroBanner.css";
/* images */
import heroBanner from "../../media/heroBannerImageMain.jpg";
import movieBanner from "../../media/moviesHeroImage.jpg";
import watchedBanner from "../../media/watchedHeroImage.jpg";
import savedBanner from "../../media/savedHeroImage.jpg";
import { motion, motions } from "framer-motion";

function HeroBanner(props) {
  /* hold base images */
  const homepageHero = heroBanner;
  const moviePageHero = movieBanner;
  const watchedPageHero = watchedBanner;
  const savedPageHero = savedBanner;

  /* updating herobanner by page */
  const [currentBannerShow, setCurrentBannerShow] = useState(heroBanner);

  /* conditional logic on using History check to then change currentBanner */
  useEffect(() => {
    if (props.history.location.pathname === "/home") {
      setCurrentBannerShow(homepageHero);
    } else if (props.history.location.pathname === "/movies") {
      setCurrentBannerShow(moviePageHero);
    } else if (props.history.location.pathname === "/watched") {
      setCurrentBannerShow(watchedPageHero);
    } else if (props.history.location.pathname === "/saved") {
      setCurrentBannerShow(savedPageHero);
    } else return console.log("banner check returned");
  }, [currentBannerShow, props.history.location.pathname]);

  return (
    <>
      <div
        className="heroImageMain"
        style={{ backgroundImage: `url(${currentBannerShow})` }}
      ></div>
      <div className="heroMainText">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
        >
          <h1 className="mainHeroTitle"> {props.heroTitle} </h1>
        </motion.div>
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
        >
          <h2 className="mainHeroSubTitle">{props.heroText}</h2>
        </motion.div>
        <h2 className="mainHeroSubTitle">{props.heroExplanation}</h2>
      </div>
    </>
  );
}

export default HeroBanner;
