import React from "react";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { cleanLogOut } from "../../redux/cartSlice";

import { signOut } from "next-auth/react";

const ProfilePage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogout = () => {
    dispatch(cleanLogOut())
    dispatch(logout());
    Cookies.remove("cart");
    
    signOut();
    router.replace("/");
    //Cookies.remove("token");
  };

  return (
    <ShopLayout title={"Profile"} pageDescription={""}>
      <div className="profile__container">
        <h1>My Account</h1>
        <div className="profile__main">
          
          <div className="profile__details">
          <h2>ACCOUNT DETAILS</h2>
            <p>Hernan Moneta</p>
            <button className="btn">Add adresses</button>
          </div>
          <div className="profile__bag">
          <h2>BAGS SECURED</h2>
            <p>You haven&apos;t placed any orders yet.</p>
          </div>
          <button className="btn" onClick={() => userLogout()}>
            Log out
          </button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ProfilePage;
