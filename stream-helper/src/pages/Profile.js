import React, { useState, useEffect } from "react";
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
  Button,
} from "react-bootstrap";
import "../styles/Profile.css";
import SavedMoviesModal from "../components/Modals/SavedMoviesModal";
// import EditUserModal from "../components/Modals/EditUserModal";
import Forum from "../components/forum/Forum";
import WatchedMoviesModal from "../components/Modals/WatchedMoviesModal";
import DislikedMoviesModal from "../components/Modals/DislikedMoviesModal";
/* GraphQl */
import { useMutation } from "@apollo/client";
import { UPDATEUSERPROFILE } from "../graphql/operations";

function Profile({ history }) {
  const [update, { loading, error, data }] = useMutation(UPDATEUSERPROFILE);

  const [user] = useRecoilState(userState);
  /* EDIT PROFILE USER  */
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();

  const submitProfileEdit = async () => {
    console.log("submitProfileEdit");
    await update({
      variables: {
        updateUserFirstname: firstname,
        updateUserLastname: lastname,
        updateUserUsername: username,
        updateUserEmail: email,
      },
    });
    // history.push("/home");
  };
  /* Hero Banner */
  // not working on update being declared here
  // const heroTitle = `Hey ${user.username}`;
  const heroText =
    "Edit Your Profile Details Or View Some Of Your Curated Lists Below";
  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      // setUser(data);
      console.log("useeffect setUser");
      // history.push("/home");
    }
  }, [loading, data]);
  if (loading) return console.log("Loading update");
  if (error) return console.log(`Error! ${error.message}`);

  return (
    <>
      <NavigationBar />
      <CheckUser history={history} />;
      <>
        {console.log(user)}
        {user && !loading ? (
          <>
            <HeroBanner
              heroText={heroText}
              heroTitle={`Hey ${user.username}`}
            />

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

                <Forum
                  firstname={(e) => setFirstName(e.target.value)}
                  lastname={(e) => setLastName(e.target.value)}
                  email={(e) => setEmail(e.target.value)}
                  username={(e) => setUserName(e.target.value)}
                  submit={submitProfileEdit}
                />

                {/* <EditUserModal
                  firstname={(e) => setFirstName(e.target.value)}
                  lastname={(e) => setLastName(e.target.value)}
                  email={(e) => setEmail(e.target.value)}
                  username={(e) => setUserName(e.target.value)}
                  submit={submitProfileEdit}
                /> */}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
}

export default Profile;
