import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { VERIFY } from "../graphql/operations";

const CheckUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const { loading, error, data } = useQuery(VERIFY, {
    fetchPolicy: "network-only",
  });

  useEffect(async () => {
    if (!user) {
      if (!loading && data) {
        setUser(data.verifyUser);
      }
    }
  }, []);
  return <>{console.log("user", user)}</>;
};

export default CheckUser;
