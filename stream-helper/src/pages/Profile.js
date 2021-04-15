import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import '../styles/Profile.css'
/* GraphQl */
/* import { useMutation } from "@apollo/client"; */
/* import { UPDATEUSER } from "../graphql/operations"; */
import HeroBanner from '../components/HeroBanner/HeroBanner';

function Profile() {

    /* Hero Banner */
    const heroTitle = `Hey CurrentUserName!`
    const heroText = "Edit Your Profile Details Or View Some Of Your Curated Lists Below"

  

    /* GQL */

    /* const [
        update,
        { loading: loadingS, error: errorS, data: dataS },
      ] = useMutation(UPDATEUSER);


      useEffect(() => {
        if (!loadingS && dataS) {
          console.log(dataS);
        }
      }, [dataS]);

      if (loadingS) return console.log("Loading update");
      if (errorS) return `Error! ${errorS.message}`;
 */
 /*    const submitProfileEdit = async (e) => {
        e.preventDefault();
        await update({
          variables: {
            updateUserDetails: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                username: username,
                password: password,
            },
          },
        });
      }; */

    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />

        {/* Buttons for Modal Popups */}


        {/* Modal For Profile Edit */}
      
        
        
        </>
    )
}

export default Profile