// import React, { useRef, useState } from 'react'
// // import './external.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     // const nav = useNavigate();
//     // let userId = useRef();
//     // let userPass = useRef();
//     // const [userData,setUserData] = useState([])
//     // const loginUser =()=>{
//     //     // console.log(userId.current.value)
//     //     // console.log(userPass.current.value)
//     //     let uid = userId.current.value;
//     //     let upass = userPass.current.value;
//     //     axios.get("http://localhost:8888/users").then((res)=>{
//     //         // console.log(res.data);
//     //         setUserData(res.data);
//     //        const data = userData.filter((val)=>{ return val.uname===uid && val.upass===upass});
//     //        if(data.length > 0){
//     //         sessionStorage.setItem("user",uid);
//     //         nav("/dashboard");
//     //        }else{
//     //         window.alert("Wrong Crendentail");
//     //         userId.current.value="";
//     //         userPass.current.value="";
//     //        }

//     //     }).catch((err)=>{})

//     const nav = useNavigate();
//     let userId = useRef();
//     let userPass = useRef();
//     const [userData,setUserData] = useState([]);
//     let path = '';


//     const [selectedOption, setSelectedOption] = useState('user');
//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//       };


//     // if(selectedOption==='admin' ){
//     //     path = '/admin'
//     // }
//     // else{
//     //     path='/dashboard'
//     // }

//     const loginUser = () => {
//         let uid = userId.current.value;
//         let upass = userPass.current.value;
      
//         axios.get("http://localhost:3000/employee").then((res) => {
//           setUserData(res.data);
//           const data = userData.filter((val) => val.name === uid && val.pass === upass);
      
//           if (selectedOption === 'admin' && uid !== 'admin') {
//             // Admin option selected, but user credentials entered
//             window.alert("Invalid credentials for admin");
//             return;
//           }
      
//           if (selectedOption === 'user' && uid === 'admin') {
//             // User option selected, but admin credentials entered
//             window.alert("Invalid credentials for user");
//             return;
//           }
      
//           path = selectedOption === 'admin' ? '/admin' : '/userdash';
      
//           if (data.length > 0) {
//             sessionStorage.setItem("user", uid);
//             nav(path);
//           } else {
//             window.alert("Wrong Credential");
//             userId.current.value = "";
//             userPass.current.value = "";
//           }
//         }).catch((err) => {});
//       };

    
//     return (
//         <body style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh',
//             margin: 0
//           }}>
//             <div className="card" style={{ width: '25%' }}>
//               <div className="card-header">
//                 <div className="row">
//                   <div className="col" style={{backgroundColor:''}}>
//                     <input type="radio" name="userType" id="user" value="user" checked={selectedOption === 'user'}
//                 onChange={handleOptionChange}/> <label htmlFor="user">User</label>
//                     <input type="radio" name="userType" id="admin" value="admin" style={{marginLeft:'20px'}} checked={selectedOption === 'admin'}
//                 onChange={handleOptionChange} /> <label htmlFor="admin">Admin</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="inputEmail">E-Mail</label>
//                     <input type="email" className="form-control" id="inputEmail" placeholder="Enter your E-Mail" required />
//                   </div>
//                   <div className="form-group" style={{marginTop:'10px'}} >
//                     <label htmlFor="inputPassword">Password</label>
//                     <input type="password" className="form-control" id="inputPassword" placeholder="Enter your password" required />
//                   </div>
//                   {/* <button type="submit" className="btn btn-primary" style={{marginTop:'10px'}}>Submit</button> */}
//                   <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
//                 </form>
//               </div>
//             </div>
//           </body>
//     )
// }

// export default Login




import React, { useRef, useState } from 'react'
// import './external.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    let userId = useRef();
    let userPass = useRef();
    const [userData,setUserData] = useState([]);
    let path = '';


    const [selectedOption, setSelectedOption] = useState('user');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };


    // if(selectedOption==='admin' ){
    //     path = '/admin'
    // }
    // else{
    //     path='/dashboard'
    // }

    const loginUser = () => {
        let uid = userId.current.value;
        let upass = userPass.current.value;
      
        axios.get("http://localhost:3000/employee").then((res) => {
          setUserData(res.data);
          const data = userData.filter((val) => val.name === uid && val.pass === upass);
      
          if (selectedOption === 'admin' && uid !== 'admin') {
            // Admin option selected, but user credentials entered
            window.alert("Invalid credentials for admin");
            return;
          }
      
          if (selectedOption === 'user' && uid === 'admin') {
            // User option selected, but admin credentials entered
            window.alert("Invalid credentials for user");
            return;
          }
      
          const path = selectedOption === 'admin' ? '/admin' : '/userdash';
      
          if (data.length > 0) {
            sessionStorage.setItem("user", uid);
            nav(path);
          } else {
            window.alert("Wrong Credential");
            userId.current.value = "";
            userPass.current.value = "";
          }
        }).catch((err) => {});
      };
      

      
      

    return (
        <div>
            <h1>Login</h1>

           <form className='myform'>
           <input
                type="radio"
                id="userRadio"
                name="userType"
                value="user"
                checked={selectedOption === 'user'}
                onChange={handleOptionChange}
            />
            <label htmlFor="userRadio">User</label>

            <input
                type="radio"
                id="adminRadio"
                name="userType"
                value="admin"
                checked={selectedOption === 'admin'}
                onChange={handleOptionChange}
            />
            <label htmlFor="adminRadio">Admin</label>
            <br/>
            <label>Enter User Id</label>
            <input type='text' name='userid' ref={userId} className='form-control' />
            <label>Enter User Password</label>
            <input type='text' name='userpass' ref={userPass} className='form-control' />
            <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
           </form>

        </div>
    )
}

export default Login
