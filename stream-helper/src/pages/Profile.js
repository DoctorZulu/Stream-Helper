import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/Navbar/NavigationBar'
import HeroBanner from '../components/HeroBanner/HeroBanner';
/* styling */
import { Button, Col, Image, Row } from 'react-bootstrap';
import '../styles/Profile.css'
import SavedMoviesModal from '../components/Modals/SavedMoviesModal';
import EditUserModal from '../components/Modals/EditUserModal';
import LikedMoviesModal from '../components/Modals/LikedMoviesModal';

function Profile({ history }) {

    /* Hero Banner */
    const heroTitle = `Hey CurrentUserName!`
    const heroText = "Edit Your Profile Details Or View Some Of Your Curated Lists Below"




    return(
        <>
        <NavigationBar />
        <HeroBanner heroText = {heroText} heroTitle = {heroTitle} />

        <div className="profileContentContainer">

          <div className="profileContentItems">
            {/* user Profile Image */}
            <Image src="" rounded />
            <h1> bio here</h1>

            {/* Modal For Liked Movies */}
            <LikedMoviesModal />

            {/* Modal For Saved Movies*/}
            <SavedMoviesModal />
            
            {/* Modal For Profile Edit */}
            <EditUserModal history = {history}/>
          </div>
        </div>

      
        
        
        </>
    )
}

export default Profile