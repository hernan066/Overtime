import React from 'react'
import { ShopLayout } from '../../components/layout/ShopLayout';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ProfilePage: NextPage = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  
  const userLogout = () => {
    dispatch(logout());
    Cookies.remove('token');
    router.replace('/');

  }
  
  
  return (
    <ShopLayout title={"Profile"} pageDescription={""}>
      <h1>Profile</h1>
      <button className='btn' onClick={()=> userLogout()}>Log out</button>
    </ShopLayout>
  )
}

export default ProfilePage

