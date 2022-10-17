import { useEffect, useState } from 'react';
import axios from 'axios';
const UserHome=()=>{
  var [pid,updatepid]=useState();
  var [data,updatedata]=useState([]);
  var [pro,updatepro]=useState({id:'',roll:'',branch:'',year:'',username:'',first_name:'',last_name:'',email:'',password:''});
useEffect(
  function()
  {
    async function getData()
    {
      var res=await axios.get('http://restp.herokuapp.com/student/');
      //console.log(res.data);
      updatedata(res.data);
    }
    getData();
  }
);
function changeval(e)
{
  updatepid(e.target.value);
}
const prochange=(e)=>{
  updatepro({...pro,[e.target.name]:e.target.value});
}
return(
  <>
    
    <form onSubmit={(e)=>{
      e.preventDefault();
      if(pro.id==='')
      {
      async function addpro()
      {
        var res=await axios.post("http://restp.herokuapp.com/student/",{roll:pro.roll,branch:pro.branch,year:pro.year,username:pro.username,first_name:pro.first_name,last_name:pro.last_name,email:pro.email,password:pro.password});
        if(res.status===201)
        {
          alert('Details added successfully');
        }
      }
        addpro();
      }
      else
      {
        async function updatepro()
        {
          var res=await axios.put(`http://restp.herokuapp.com/student/${pro.id}/`,pro);
          if(res.status===200)
          {
            alert("Deatils updated sucessfully");
          }
        }
        updatepro();
      }
      updatepro({id:'',roll:'',branch:'',year:'',username:'',first_name:'',last_name:'',email:'',password:''});
      }}>
      Roll<input type="text" name="roll" value={pro.roll} onChange={prochange}/><br/>
      Branch<input type="text" name="branch" value={pro.branch} onChange={prochange}/><br/>
      Year<input type="text" name="year" value={pro.year} onChange={prochange}/><br/>
      UserName<input type="text" name="username" value={pro.username} onChange={prochange}/><br/>
      First Name<input type="text" name="first_name" value={pro.first_name} onChange={prochange}/><br/>
      Last Name<input type="text" name="last_name" value={pro.last_name} onChange={prochange}/><br/>
      Email<input type="text" name="email" value={pro.email} onChange={prochange}/><br/>
      Password<input type="text" name="password" value={pro.password} onChange={prochange}/><br/>
      <button name="b1" className='btn btn-primary'>Add Details</button>
      <button name="b2" className='btn btn-primary'>Update Details</button>
      </form>
      <input type="number" name="pid" value={pid} onChange={changeval}/>
      
      <button onClick={()=>{
        async function search()
        {
          var resp=await axios.get(`http://restp.herokuapp.com/student/${pid}`);
          updatedata([resp.data])
        }
        search();
      }}>search</button>
      <table className='table table-bordered table-center'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Roll No</th>
          <th>Branch</th>
          <th>Year</th>
          <th>UserName</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        </thead>
        <tbody>
          {data.map((v)=>{
            return(

              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.roll}</td>
                <td>{v.branch}</td>
                <td>{v.year}</td>
                <td>{v.username}</td>
                <td>{v.first_name}</td>
                <td>{v.last_name}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
                <td><button className='btn btn-danger' onClick={()=>{
                  async function delpro()
                  {
                    var res=await axios.delete(`http://restp.herokuapp.com/student/${v.id}`);
                    if(res.status===204)
                    {
                      alert("Details deleted successfully");
                    }
                  }
                  delpro();
                }}>Delete</button></td>

                <td><button className='btn btn-warning' onClick={()=>{
                  updatepro(v);
                }}>Update</button></td>
                
              </tr>
              
            )
          })}
          
        </tbody>
      </table>
  </>
)
}
export default UserHome;