import React from "react";
import { userState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import CheckUser from "../hooks/checkUser";
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
/* styling */
import {
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Image,
  Row,
} from "react-bootstrap";
import "../styles/Profile.css";
import SavedMoviesModal from "../components/Modals/SavedMoviesModal";
import EditUserModal from "../components/Modals/EditUserModal";
import WatchedMoviesModal from "../components/Modals/WatchedMoviesModal";
import DislikedMoviesModal from "../components/Modals/DislikedMoviesModal";

function Profile({ history }) {
  const [user] = useRecoilState(userState);

  /* Hero Banner */
  // not working on update being declared here
  // const heroTitle = `Hey ${user.username}`;
  const heroText =
    "Edit Your Profile Details Or View Some Of Your Curated Lists Below";
  return (
    <>
      <NavigationBar />
      <CheckUser history={history} />
      {console.log(user)}
      {user ? (
        <>
          <HeroBanner heroText={heroText} heroTitle={`Hey ${user.username}`}  history = {history} />

          <div className="profileContentContainer">
            <div className="profileContentItems">
              {/* user Profile Image */}
              <Image src="" rounded />
              <h1>
                {" "}
                User Bio here: A bunch of random string text and Charfield{" "}
                <br />
                content to fill up this space
              </h1>

              {/* Modal For Liked Movies */}
              <DropdownButton
                as={ButtonGroup}
                title="Watched/Disliked Movies"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">
                  <WatchedMoviesModal />
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <DislikedMoviesModal />
                </Dropdown.Item>
              </DropdownButton>

              {/* Modal For Saved Movies*/}
              <SavedMoviesModal />

              {/* Modal For Profile Edit */}
              <EditUserModal history={history} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
