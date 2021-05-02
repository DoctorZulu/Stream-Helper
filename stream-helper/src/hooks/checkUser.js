import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { VERIFY } from "../graphql/operations";

const CheckUser = ({ history }) => {
  const [user, setUser] = useRecoilState(userState);
  const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(
    VERIFY,
    {
      fetchPolicy: "network-only",
    },
  );

  useEffect(() => {
    try {
      if (!user) {
        const authToken = localStorage.getItem("uid");
        if (!loadingUser && dataUser) {
          setUser(dataUser.verifyUser);
          localStorage.setItem("uid", `Bearer ${dataUser.verifyUser.token}`);
        }
        if (!loadingUser && !user && !dataUser) {
          history.push("/");
        }
        // if (authToken.split(" ")[1] === "undefined") {
        //   console.log(dataUser);
        //   // history.push("/");
        // }
      }
    } catch (error) {
      console.log(error);
    }
  }, [loadingUser, dataUser]);
  return <>{errorUser ? errorUser.message : null}</>;
};

export default CheckUser;
