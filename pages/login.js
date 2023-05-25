//layout
import Layout from "../layouts/default";
import Css from "../components/Head";
//import hook react
import { useState, useEffect } from 'react';

//import Head
import Head from 'next/head';

//import router
import Router from 'next/router';

//import axios
import axios from "axios";

//import js cookie
// untuk menyimpan token dalam browser
import Cookies from 'js-cookie';

function Login() {
    
    //define state
    // menyimpan data yang diketik pada form
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    // menyimpan response error
    const [validation, setValidation] = useState([]);

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('name', username);
        formData.append('password', password);

        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/login`, formData )
        .then((response) => {

            //set token on cookies
            Cookies.set('token', response.data.data[0].authorisation.token,{
                expires : new Date(new Date().getTime() + 30 * 60 * 1000)
            });
            // console.log(response.data.data[0].authorisation.token);

            //redirect to dashboard
            Router.push('/dashboard');
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error);
        })
    };

    //hook useEffect
    // digunakan untuk pengecekan kondisi
    useEffect(() => {

        //check token
        // jika didalam browser terdapat cookies dengan nama Token, maka redirect secara paksa kedalam halaman dashboard
        if(Cookies.get('token')) {

            //redirect page dashboard
            Router.push('/dashboard');
        }
    }, []);

    return(
        <>
            
            <Head>
                <title>Login Account</title>
                <Css/>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">HALAMAN LOGIN</h4>
                                <hr/>
                                {
                                    validation.message && (
                                        <div className="alert alert-danger">
                                            {validation.message}
                                        </div>
                                    )
                                }
                                <form onSubmit={loginHandler}>
                                    <div className="mb-3">
                                        <label className="form-label">ALAMAT EMAIL</label>
                                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan Username / Email / No Handphone"/>
                                    </div>
                                    {
                                        validation.username && (
                                            <div className="alert alert-danger">
                                                {validation.username[0]}
                                            </div>
                                        )
                                    }
                                    <div className="mb-3">
                                        <label className="form-label">PASSWORD</label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                    </div>
                                    {
                                        validation.password && (
                                            <div className="alert alert-danger">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Login