import { useState } from 'react';
import '../CSS/SignUp.css';

const SignUp = () => {

    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [mobile,setMobile]=useState("");
    let [pass,setPass]=useState("");
    let [rePass,setRePass]=useState("");

    const handleSignUp=(e)=>{
        e.preventDefault();
        if(mobile.length==10)
        {
            if(pass.length==rePass.length)
            {
                if(pass==rePass) alert('all good')
                else alert('Password Does not Match')
            }
            else{
                alert('Password Does not Match')
            }
        }
        else alert('Enter a Valid 10 digit Moile Numer')

    }
   

    return (

        <div className="signInContainer flex">
            <div className="signInContainerMain flex">
                
                <form onSubmit={handleSignUp} className="formComtainer flex">
                  
                    <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name' required/>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' required/>
                    <input onChange={(e)=>setMobile(e.target.value)} type="text" placeholder='Enter Mobile Number' required/>
                    <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder='Create Password' required/>
                    <input onChange={(e)=>setRePass(e.target.value)} type="password" placeholder='Re-enter Password' required/>
                    <button type="submit" className='secondarybtn'>Sign Up</button>
                    <p>Existing User ? <span>Sign In</span></p>
                </form>
                <div className="leftsignInContainerMain">
                    <h3>Sign Up</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sint vero obcaecati cumque laborum asperiores provident recusandae,
                          sequi molestias, rem necessitatibus iusto corporis, 
                          sunt a aliquam minima aut iste ratione nisi.</p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;