import Layout from "../layouts/default";
import Link from "next/link";
import {FaPen, FaPlus, FaTrash} from "react-icons/fa"


const Userpage = ({data}) => {
  
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
                  <h2 className="content-header-title float-left mb-0">List Of Customer</h2>
                  <div className="breadcrumb-wrapper">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/dashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">List Of Customer
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
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Birthdate</th>
                          <th>Address</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.data.data.map((user) => (
                          <tr>

                            <td>
                              <span className="font-weight-bold">{user.name}</span>
                            </td>
                            <td>
                              <span className="font-weight-bold">{user.profile.first_name} {user.profile.last_name}</span>
                            </td>
                            <td>{user.phone_number}</td>
                            <td>
                              {user.email}
                            </td>
                            <td>
                              <span className="font-weight-bold">{user.profile.gender}</span>
                            </td>
                            <td>
                              <span className="font-weight-bold">{user.profile.birthdate}</span>
                            </td>
                            <td>
                              {user.address.map((addr) => (
                                <li className="font-weight-bold mr-1 mt-1 mb-1">{addr.address_user_subdistrict_name +", "+ addr.address_user_city_name +", "+ addr.address_user_province_name}
                                  <span className="badge badge-pill badge-light-primary mr-1">{addr.address_user_postal_code}</span>
                                </li>
                                
                              ))}
                            </td>
                            <td>
                            <span>
                               <a className="btn btn-sm btn-success mr-1 mb-1" href="">
                               <FaPen/>
                                 <span>Edit</span>
                               </a>
                               <a className="btn btn-sm btn-danger" href="">
                                <FaTrash/>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/v1/admin/customer`,{
    credentials:'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  });

  const data =  await res.json();
  return{
    props :{
      data : data,
    }
  }
}



export default Userpage;