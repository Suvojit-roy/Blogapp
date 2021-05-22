import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{
        isSignedin:false,
        userData: null,
        searchInput:"tech",
        blogData:null
    },
    reducers:{
        setSignedIn: (state,action)=>{
            state.isSignedin = action.payload
        },
        setUserData: (state,action)=>{
            state.userData = action.payload
        },
        setInput: (state,action)=>{
            state.searchInput=action.payload
        },
        setBlogData:(state,action)=>{
            state.blogData= action.payload
        }
    }
});

export const {setBlogData,setInput,setSignedIn,setUserData,} = userSlice.actions;

export const selectSignedIn =  (state) =>state.user.isSignedin
export const selectUserData =  (state) =>state.user.userData
export const selectuserInput =  (state) =>state.user.searchInput
export const selectBlogData =  (state) =>state.user.blogData

export default userSlice.reducer;