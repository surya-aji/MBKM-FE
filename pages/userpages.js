import Layout from "../layouts/default";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import {FaFonticonsFi, FaHandsHelping, FaBook,FaPen, FaTrash, FaPlus} from "react-icons/fa"


const Userpage = ({data, role}) => {
    const token = Cookies.get('roken');
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [roles, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([]);

    const AddUser = async (e) => {
      const formData = new FormData();
      formData.append('name', username);
      formData.append('email', email);
      formData.append('phone_number', phone);
      formData.append('role', roles);
      formData.append('password', password);


      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/register`,{
        credentials:'include',
        method: 'POST',
        body : JSON.stringify({
          name: username,
          email: email,
          phone_number: phone,
          role : role,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.status >= 400) {
          return res.status(400).json({
            error: 'There was an error'
          });
        }
  
        return res.status(200).json({ status: 'ok' });
      })
      .catch((error) => {

          setValidation(error);
      });

   

     
        };
  return(
    <Layout>

      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">List Of User</h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/dashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">List Of User
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
              <div className="form-group breadcrumb-right">
                <div className="dropdown">
                  <button className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="grid" /></button>
                  <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="app-todo.html"><i className="mr-1" data-feather="check-square" /><span className="align-middle">Todo</span></a><a className="dropdown-item" href="app-chat.html"><i className="mr-1" data-feather="message-square" /><span className="align-middle">Chat</span></a><a className="dropdown-item" href="app-email.html"><i className="mr-1" data-feather="mail" /><span className="align-middle">Email</span></a><a className="dropdown-item" href="app-calendar.html"><i className="mr-1" data-feather="calendar" /><span className="align-middle">Calendar</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="row" id="basic-table">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">List Of User</h4>
                  </div>
                  <div className="card-body">
                  {
                                    validation.message && (
                                        <div className="alert alert-danger">
                                            {validation.message}
                                        </div>
                                    )
                                }
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a className="btn btn-sm mr-auto btn-primary" data-toggle="modal" data-target="#inlineForm">
                      <FaPlus />
                      <span className="ml-1" >Add User</span>
                    </a>


                    {/* <div className="modal fade text-left" id="inlineForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel33">Add User </h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div> */}
                          <form onSubmit={AddUser}>
                            <div className="modal-body">
                              <label>Name: </label>
                              <div className="form-group">
                                <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                              </div>

                              <label>Phone Number: </label>
                              <div className="form-group">
                                <input type="text" placeholder="Phone Number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                              </div>
                             
                              <label>Email: </label>
                              <div className="form-group">
                                <input type="text" placeholder="Email Address" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                              </div>
                              <label >Role</label>
                              <select className="form-control" id="Role" value={roles} onChange={(e) => setRole(e.target.value)}>
                                {role.data.map(roles => (
                                  <option key={roles.id} id={roles.id}>{roles.name}</option>
                                ))}
                            
                              </select>

                              <label>Password: </label>
                              <div className="form-group">
                                <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                          </form>
                        {/* </div>
                      </div>
                    </div> */}




                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Permission</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.data.data.map((user) => (
                          <tr>
                            <td>
                              <span className="font-weight-bold">{user.name}</span>
                            </td>
                            <td>{user.phone_number}</td>
                            <td>
                              {user.email}
                            </td>
                            <td>
                              {user.permissions.map((permision) => (
                                <li>
                                  <span className="badge badge-pill badge-light-primary mr-1" key={permision.id}>{permision.name}</span>
                                </li>
                              ))}
                            </td>
                            <td>
                              <span>
                                <a className="btn btn-success mr-1" href="">
                                  <FaPen />
                                  <span>Edit</span>
                                </a>
                                <a className="btn btn-danger" href="">
                                  <FaTrash />
                                  <span>Delete</span>
                                </a>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}



export async function getServerSideProps(context){
  const token = context.req.cookies.token
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/user`,{
    credentials:'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  });

  const roles = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/role`,{
    credentials:'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  });

  const data =  await res.json();
  const role = await roles.json();
  return{
    props :{
      data : data,
      role : role
    }
  }
}

export default Userpage;