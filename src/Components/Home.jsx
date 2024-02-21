import React, { useEffect, useState } from 'react'
import TopBar from './common/TopBar';
import BlogCard from './common/BlogCard';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios'; 
function Home() {
 let [blogs,setBlogs] = useState([])
 const getBlogs=async()=>{
  try {
    let res = await axios.get(API_URL)
      if(res.status===200)
      {
        // toast.success('Blogs fetched Successfully!')
        setBlogs(res.data.filter(e=>e.status))
      }
  } catch (error){
    toast.error()
  }
 }
 useEffect(()=>{
  getBlogs()
 },[])
 return <div className="container-fluid">
    <TopBar/>
    <div className="previewWrapper">
      {
        blogs.map((e)=>{
          return <BlogCard title={e.title} image={e.image} description={e.description} key={e.id}/>
        })
      }
    </div>
  </div>
   
    }

export default Home