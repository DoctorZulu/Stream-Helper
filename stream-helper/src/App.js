import routes from './config/routes';
/* Recoil */
import { userState } from "./recoil/atoms"
import { useSetRecoilState } from "recoil"



function App() {
  const setUser = useSetRecoilState(userState)

  /* need to run a verify route and pickup localStorage token or uid */
/*   useEffect(function (){
    if ( localStorage.uid ) {
      someAuthModelHere.verify()
      .then(function(json){ setUser(json.user)})

    }
  }, []) */


  return (
    <>
     { routes }
    </>
  );
}

export default App;
