import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from './common/TopBar'
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function Edit() {

  let {id} = useParams()
  
  let [title,setTitle] = useState("")
  let [image,setImage] = useState("")
  let [description,setdescription] = useState("")
  let navigate = useNavigate()

   const handleEdit = async()=>{
      try {
        let data = {title,image,description,status:false}
        
        let res =  await axios.put(`${API_URL}/${id}`,data)
        if(res.status===200)
        {
          toast.success("Blog Edited Successfully")
          navigate('/dashboard')
        }
      } catch (error) {

      }
    }
    const getBlogById = async()=>{
      try {
        let res = await axios.get(`${API_URL}/${id}`)
        if(res.status===200)
        {
          setTitle(res.data.title)
          setImage(res.data.image)
          setDesc(res.data.description)
        }
      } catch (error) {
          toast.error("Internal Server Error")
      }
    }
  
    useEffect(()=>{
      getBlogById()
    },[])

  return <div className="container-fluid">
    <TopBar/>
    <div className='homeWrapper'>
    <div className="formWrapper">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>{setImage(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" onChange={(e)=>{setdescription(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>
    </div>
    <div className="previewWrapper">
      <h2 style={{textAlign:"center"}}>Preview</h2>
       <BlogCard
         title={title}
         image={image}
         description={description}
       />
    </div>
    </div>
  </div>
}

export default Edit