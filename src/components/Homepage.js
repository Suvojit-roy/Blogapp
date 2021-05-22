import React from 'react'
import { render } from 'react-dom'
import GoogleLogin from 'react-google-login'
import { selectSignedIn, setSignedIn, setUserData } from '../features/Userslice'
import {useSelector,useDispatch} from 'react-redux'
import blogimage from './Homepage_img.png'

export default function Homepage() {
    const dispatch=useDispatch()
    
    
    const login=(response)=>{
        // console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }



    const isSignedIn= useSelector(selectSignedIn)
    
    return (
        <div style={{display:isSignedIn?"none":""}}>
        {!isSignedIn?
        <div style={{height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <img style={{height:"50%"}} src={blogimage} alt="Blogs"/>
            <h1 style={{fontFamily:"monospace"}}>Hello everyone</h1>
            <h2 style={{fontFamily:"monospace"}}>Welcome to the blogging website and get educated with interesting blogs</h2>
        
        <GoogleLogin
            clientId="563919886455-8aplmgdagtpn5dst8p2i8cjhmqciqnkp.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{margin:"15px",padding:"15px",fontSize:"1rem",border:"none",background:"orange"}}>Login with Google</button>
              )}
            buttonText="Login"
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
        />
        </div>
    
        :
        ""}
        </div>
    )
}
