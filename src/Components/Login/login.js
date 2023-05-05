import React from 'react';
import Axios from 'axios';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import userIcon from '../Images/userIcon.png'
import Button from '@mui/material/Button';
import { MDBInput } from 'mdb-react-ui-kit';
import { Card, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Login() {
  const[errMsg,setErrMsg]=useState('');
  const navigate = useNavigate(); 
  const [data, setData] = useState({
    "email":"",
    "password":"" 
  })
  const [loginAs, setLoginAs] = useState('user');

  const handleLoginAs = (event) => {
    setLoginAs(event.target.value);
  };

  const getToken = () => {
      let token = localStorage.getItem("token");
      if (token === null || token.length === 0) return null;
      return token;
  }
  const isTokenExpired=()=>{
      const token= localStorage.getItem("token");
      return Date.now() >= (JSON.parse(atob(token.split('.')[1]))).exp * 1000;
  }

  function handleKeyUp(e) {
    if (e.getModifierState("CapsLock")) {
      document.getElementById("capsLockShow").style.display = 'block';
    } else {
      document.getElementById("capsLockShow").style.display = 'none';
    }
  }

     
  function submit(e) {
    e.preventDefault();
    const url=`http://localhost:8081/api/v1/user/login`;
    Axios.post(url,{
        "email": data.email, 
        "password": data.password
      },
      { headers:{
          'Access-Control-Allow-Origin':'*'
        }
      }).
      then(res=> {
        console.log(res.data);
        console.log("checkThis")
        localStorage.setItem("token",res.data.data);
        if (loginAs == 'admin') navigate("/admin");
        else if (loginAs == 'user') navigate("/user");
        else if (loginAs == 'employee') navigate("/employee");
        else navigate("/agent");
      }, 
      (e) => setErrMsg("Invalid Credentials")
  );} 

  function handle(e) {
      const newdata={...data};
      newdata[e.target.id]=e.target.value;
      setData(newdata);
  };
  
  if(getToken()!=null && !isTokenExpired()) {
    useEffect(() => {navigate('/user')}, []);
  } else {
    return (
      <div id='imgDiv'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-4">
              <Card component="form" id="pullDown"  onSubmit={(e)=>submit(e)}>
                <div className='text-center'><img className='user-img'
                  width={120}
                  src={`${userIcon}?w=248&fit=crop&auto=format`}
                  srcSet={`${userIcon}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={'...'}
                  loading="lazy"
                /></div>
                <div className='text-center mb-4 mb-2 text-muted'>User Login</div>
                {/* <InputLabel id="login-as">Login As</InputLabel> */}
                  <Select
                    id="login-as-value"
                    value={loginAs}
                    label="login-as"
                    onChange={handleLoginAs}
                    classname='border-0'
                  >
                  <MenuItem value={"user"}>User</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                  <MenuItem value={"employee"}>Employee</MenuItem>
                  <MenuItem value={"agent"}>Agent</MenuItem>
                </Select>
                <MDBInput onChange={(e)=>handle(e)} fullWidth className='col-lg-py-2 text-center' id='email' wrapperClass='mb-2' placeholder="Username" type='email' value={data.email}/>
                <MDBInput onChange={(e)=>handle(e)} onKeyUp={handleKeyUp} fullWidth className='col-lg-py-2 text-center' id='password' wrapperClass='mb-2' placeholder="Password" type='password' value={data.password}/>
                <span className='text-danger mb-2'>{errMsg}</span>
                <p id='capsLockShow' style={{'font-size':'10px', 'display':'none'}} className='mb-2 text-muted mx-1'>Caps Lock is On</p>
                <Button type="submit" className='mb-5 mt-2' fullWidth variant="contained">Sign In</Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

