import './AdminLogin.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const AdminLogin=()=>{
    let navigate=useNavigate();
    let[data,updatedata]=useState({id:'',password:''});
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        if(data.id==="admin" && data.password==="12345")
        {
            navigate("/userhome");
        }
        else
        {
            alert("Invalid id and password");
        }
    }
    return(
        <>
    
        <form onSubmit={submit}>
        {/* Id<input type="text" name="id" value={data.id} onChange={change}/><br/>
        Password<input type="number" name="password" value={data.password} onChange={change}/><br/>
        <button>Login</button> */}
        <section class="vh-50 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 " >
        <div class="card bg-dark text-white border border-warning">
          <div class="card-body p-3 text-center">

            <div class="mb-md-5 mt-md-4 pb-3">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input input type="text" name="id" value={data.id} onChange={change} class="form-control form-control-lg border border-warning" />
                <label class="form-label" for="typeEmailX">ID</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input input type="number" name="password" value={data.password} onChange={change} class="form-control form-control-lg border border-warning" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>
              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </form>
        </>
    )
}

export default AdminLogin;

