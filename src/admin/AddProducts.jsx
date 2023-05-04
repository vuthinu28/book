
import React,{useState} from 'react'
import { Col, Container,Row,Form,FormGroup } from 'reactstrap'
import {toast } from 'react-toastify'
import { db,storage } from '../firebase.config'
import{ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { collection,addDoc } from 'firebase/firestore'
import {useNavigate} from "react-router-dom"
import Helmet from '../components/Helmet/Helmet'

const AddProducts = () => {
  const [enterTitle,setEnterTitle]=useState('')
  const [enterShortDesc,setShortDesc]=useState('')
  const [enterDesc,setDesc]=useState('')
  const [enterCategory,setCategory]=useState('')
  const [enterPrice,setPrice]=useState('')
  const [enterProductImg,setProductImg]=useState(null)
  const[loading,setloading]=useState(false)

  const navigate= useNavigate()
  const addProduct = async(e)=>{
    e.preventDefault()
    setloading(true)
   // ------------ addd product to the fire base database==========
      try{
        const docRef= await collection(db, ` products` )
        const storageRef= ref(storage,` productImage/${Date.now() + enterProductImg.name}` )
        const uploadTask = uploadBytesResumable(storageRef,enterProductImg)
        uploadTask.on(()=>{
          toast.error('image not upload')
        },()=> {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{await addDoc(docRef,{
            productName: enterTitle,
            shortDesc:enterShortDesc,
            description:enterDesc,
            category:enterCategory,
            price:enterPrice,
            imgUrl:downloadURL,
          })
        })
        setloading(false)
          toast.success('Them san pham thanh cong')
          navigate("/dashboard/all-products");
        })
      } catch(error){
        toast.error("San Pham khong duoc them vao")
          //console.log(product);
      }
     
     
    
  }
  return (
    <>
    <Helmet title ={'Dashboard-Add'}/>
   <section>
    <Container>
      <Row>
        <Col lg='12'>
          <h4 >ADD PRODUCTS</h4>
         {
          loading ?  (<h4 className='py-5'>Loading..........</h4>) :( <>
            <Form onSubmit={addProduct}>
            <FormGroup className='form_group w-50'>
              <span>Products Tittle</span>
              <input type='text' placeholder='.....' value={enterTitle} 
              onChange={e=> setEnterTitle(e.target.value)} required/>
            </FormGroup>
            <FormGroup className='form_group w-50'>
              <span>Short Description</span>
              <input type='text' placeholder='.....' value={enterShortDesc} 
              onChange={e=> setShortDesc(e.target.value)}/>
            </FormGroup>
            <FormGroup className='form_group w-50'>
              <span>Descripition</span>
              <input type='text' placeholder='.....' value={enterDesc} 
              onChange={e=> setDesc(e.target.value)}/>
            </FormGroup>
            <div className='d-flex align-items-center justify-content-betwween gap-5'>
            <FormGroup className='form_group'>
              <span>Price</span>
              <input type='number' placeholder='.....' value={enterPrice} 
              onChange={e=> setPrice(e.target.value)} required/>
            </FormGroup>
            <FormGroup className='form_group'>
              <span>Category</span>
              <select className='w-100 p-2' value={enterCategory} 
              onChange={e=> setCategory(e.target.value)}>
                <option value='Văn Học Và Tiểu Thuyết'>Văn Học Và Tiểu Thuyết</option>
                <option value='Ngoại Ngữ'>Ngoại Ngữ</option>
                <option value='Tâm Lý-Kỹ Năng sống'>Tâm Lý-Kỹ Năng sống</option>
                <option value='Tiểu Thuyết'>Tiểu Thuyết</option>
              </select>
            </FormGroup>
            </div>
            <FormGroup className='form_group'>
              <span>Products Image</span>
              <input type='file'  
              onChange={e=> setProductImg(e.target.files[0])} 
              required/>
            </FormGroup>
            <button className='buy__btn btn'type='submit'>Add Product</button>
          </Form>
          
          </>)
         }
        </Col>
      </Row>
    </Container>
   </section>
   </>
  )
}

export default AddProducts