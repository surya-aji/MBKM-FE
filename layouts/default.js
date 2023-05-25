//import component Navbar
import NavbarTop from '../components/NavbarTop';
import Script from '../components/Script';
import Head from "../components/Head";
import Sidemenu from '../components/Sidemenu';
//import hook react
import { useState, useEffect } from 'react';

//import router
import Router from 'next/router';

//import axios
import axios from 'axios';

//import js cookie
import Cookies from 'js-cookie';

export default function Layout({ children}) {
    //get token
    const token = Cookies.get('token');

    //state user
    const [user, setUser] = useState({});

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/my-data`)
        .then((response) => {
            //set response user to state
            setUser(response.data);
        })
    }

    //hook useEffect
    useEffect(() => {

        //check token empty
        if(!token) {

            //redirect login page
            Router.push('/login');
        }
        
        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHanlder = async () => {

        // //set axios header dengan type Authorization + Bearer token
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // //fetch Rest API
        // await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/logout`,{ headers: {
        //   "Content-Type": "application/json",
        // },})
        // .then(() => {

            //remove token from cookies
            Cookies.remove("token");

            //redirect halaman login
            Router.push('/login');
        // });
    };

  return (
    <>
      <Head/>
      <NavbarTop user = {user}/>
      <Sidemenu/>
      <main>{children}</main>



      <Script src="app-assets/vendors/js/vendors.min.js"/>
      <Script src="app-assets/vendors/js/charts/apexcharts.min.js"/>
      <Script src="app-assets/vendors/js/extensions/toastr.min.js"/>

      <Script src="app-assets/js/core/app-menu.js"/>
      <Script src="app-assets/js/core/app.js"/>

      <Script src="app-assets/js/scripts/pages/dashboard-ecommerce.js"/>

     
    </>
  )
}
