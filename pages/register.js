//layout
import Layout from "../layouts/default"; 

//import hook react
import { useState } from 'react'; // Digunakan untuk menyimpan data yang didapatkan dari form

//import Head
import Head from 'next/head';

//import router
import Router from 'next/router'; // digunakan untuk melakukan navigasi

//import axios
import axios from "axios"; // digunakan untuk menangkap atau mengirim data ke dalam server REST API

function Register() {
    
    //define state
    //digunakan untuk menampung data yang diinputkan dalam form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    let axiosConfig = {
      headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
      }
    };

    //define state validation
    //digunakan untuk menyimpan error response
    const [validation, setValidation] = useState([]);

    //function "registerHanlder"
    //dijalankan ketika form disubmit
    const registerHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        // digunakan untuk menampung data yang diinputkan dalam form
        const formData = new FormData();

        //append data to formData
        // data yang diambil dari state yang sudah dibuat diatas
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone_number', phone);
        formData.append('first_name', firstname);
        formData.append('last_name', lastname);
        formData.append('gender', gender);
        formData.append('birthdate', birthdate);
        // formData.append('photo', photo);
        formData.append('password', password);
        // formData.append('password_confirmation', passwordConfirmation);

        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/customer/sign-up`, formData,{
          headers: {
            "Content-Type": "application/json",
          },
        },)
        .then(() => {
            //redirect to logi page
            Router.push('/login')
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })

        
    };

    return(
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">Add Account Back Office</h4>
                                <hr/>
                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">NAME</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                                            </div>
                                            {
                                            validation.name && (
                                                <div className="alert alert-danger">
                                                    {validation.name[0]}
                                                </div>
                                            )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">ALAMAT EMAIL</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                            </div>
                                            {
                                                validation.email && (
                                                    <div className="alert alert-danger">
                                                        {validation.email[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    

                                    <div className="row">
                                        <div className="col-md-6">
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
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">KONFIRMASI PASSWORD</label>
                                                <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">PHONE NUMBER</label>
                                                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Masukkan Nomor Telepon"/>
                                            </div>
                                            {
                                                validation.phone && (
                                                    <div className="alert alert-danger">
                                                        {validation.phone[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">PHOTO</label>
                                                <input type="file" placeholder='Masukan Photo' className="form-control" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">FIRST NAME</label>
                                                <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="Masukkan First Name"/>
                                            </div>
                                            {
                                                validation.firstname && (
                                                    <div className="alert alert-danger">
                                                        {validation.firstname[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">LAST NAME</label>
                                                <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="Masukkan Last Name"/>
                                            </div>
                                            {
                                                validation.lastname && (
                                                    <div className="alert alert-danger">
                                                        {validation.lastname[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">GENDER</label>
                                                <select className="form-control" value={gender} onChange={(e) => {setGender(e.target.value); }}>
                                                  <option value="Laki-laki">Laki-laki</option>
                                                  <option value="Perempuan">Perempuan</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">BIRTHDATE</label>
                                                <input type="date" placeholder='yyyy-mm-dd' className="form-control" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register