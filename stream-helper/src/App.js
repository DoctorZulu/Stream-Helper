import routes from './config/routes';
/* Recoil */
import { userState } from "./recoil/atoms"
import { useSetRecoilState } from "recoil"
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
/* testing */
import { Redirect } from "react-router-dom";


function App() {
  const setUser = useSetRecoilState(userState)

  /* need to run a verify route and pickup localStorage token or uid */
/*   useEffect(function (){
    if ( localStorage.uid ) {
      someAuthModelHere.verify()
      .then(function(json){ setUser(json.user)})

    }
  }, []) */
  console.log(Cookies.get().cookie, "-- user --")

/* 
    useEffect(function (){
    if ( Cookies.get().cookie != undefined ) {
      setUser(Cookies.get().cookie)
      alert("YES")
    } 
  }, []) */


  return (
    <>
     { routes }
     
    </>
  );
}

export default App;
