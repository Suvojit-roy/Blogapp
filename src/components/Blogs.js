import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { selectUserData, selectuserInput, setBlogData } from '../features/Userslice'
import {useSelector,useDispatch} from 'react-redux'
import Card from './Card'


export const Blogs = () => {
    const searchInput=useSelector(selectuserInput);
    const url=`https://gnews.io/api/v4/search?q=${searchInput}&token=25f99503bd79272cebf57cc6c965a464`
    const dispatch=useDispatch()
    const [blogs,setBlogs]=useState()

    const [loading,setLoading]=useState(true)

    useEffect(() => {
        axios
        .get(url)
        .then(response=>{
            dispatch(setBlogData(response.data))
            setBlogs(response.data)
            console.log(response.data)
            setLoading(false)
        })
        .catch(error=>console.log(error));
    }, [dispatch, searchInput, url] );
    
    return (
        <div className="blog__page">
      <h1 className="blog__page__header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url} rel="noreferrer">
            <img src={blog.image} />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

                
                {blogs?.totalArticles===0 && (<h3 style={{fontFamily:"monospace"}}>No blogs available, continue searching something else</h3>)}
            </div>
            
        </div>
    )
}

export default Blogs;
