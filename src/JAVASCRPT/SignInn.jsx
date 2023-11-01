import { useState } from 'react';
import '../CSS/SignInn.css';

const SignInn = () => {
    let [mobile,setMobile]=useState("");
    let [pass,setPass]=useState("");
    

    const handleSignIn=(e)=>{
        e.preventDefault();
        if(mobile.length==10)
        {
            alert ('all good')
        }
        else alert('Enter a Valid 10 digit Moile Numer')

    }

    return (

        <div className="signInContainer flex">
            <div className="signInContainerMain flex">
                <div className="leftsignInContainerMain">
                    <h3>Sign In</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero obcaecati cumque laborum asperiores provident recusandae, sequi molestias, rem necessitatibus iusto corporis, sunt a aliquam minima aut iste ratione nisi.</p>
                </div>
                <form onSubmit={handleSignIn} className="formComtainer flex">
                    <input onChange={(e)=>setMobile(e.target.value)}  type="text" placeholder='Enter Mobile Number' required/>
                    <input onChange={(e)=>setPass(e.target.value)}  type="password" placeholder='Enter Password' required/>
                    <button type="submit" className='secondarybtn'>Sign In</button>
                    <p>Don't have account ? <span>Sign Up</span></p>
                </form>
            </div>
        </div>
    );
}

export default SignInn;