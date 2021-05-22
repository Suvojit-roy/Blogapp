import React,{useState} from 'react'
import { selectBlogData, selectSignedIn, selectUserData, selectuserInput, setInput, setSignedIn, setUserData } from '../features/Userslice'
import {useSelector,useDispatch} from 'react-redux'
import {Avatar} from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'

export const Navbar = () => {
    
    const dispatch=useDispatch()
    const inputval=useSelector(selectuserInput)
    const [inputValue,setinputValue]=useState(inputval)
    const isSignedIn=useSelector(selectSignedIn)
    const userData=useSelector(selectUserData)

    const handleClick=(e)=>{
        e.preventDefault()
        dispatch(setInput(inputValue))
    }

    const logout=(response)=>{
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }
    
    return (
        <div className="nav" style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"auto"}}>
            <h1 style={{fontSize:"1.5rem",fontFamily:"'Reggae One', cursive",paddingLeft:"1rem",paddingRight:"1rem"}}>Blogs point</h1>
            
            {isSignedIn &&
            <div className="Blog_search" style={{width:"50%"}}>
                <input type="text"className="search" placeholder="search for a blog" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>
                <button className="submit" onClick={handleClick}>Search</button>
            </div>
            }
            
            {isSignedIn?
            <div className="avatarlogout" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Avatar src={userData?.imageUrl} alt={userData?.name}/>
                <h2 className="signed_in">{userData?.givenName}</h2>
                <GoogleLogout
                    clientId="563919886455-8aplmgdagtpn5dst8p2i8cjhmqciqnkp.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{margin:"10px",padding:"10px",fontSize:"0.7rem",border:"none",background:"#CF5C3F",color:"white"}}>Logout</button>
                      )}
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </div>:
            <h3 style={{paddingRight:"1rem",fontSize:"1rem"}}>Not Logged In</h3>
            }
        </div>
    )
}

export default Navbar