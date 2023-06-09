import React, { useEffect, useState } from 'react'
import {db} from '../firebase.config'
import { collection,getDocs } from 'firebase/firestore'
const useGetData = (collectionName) => {
    const [data,setdata] =useState([])
    const [loading,setloading]= useState(true)
    const collectionRef= collection(db,collectionName)
    useEffect(()=>{
        const getdata=async() =>{
            const data = await getDocs(collectionRef)
            setdata(data.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getdata()
    },[collectionRef])
  return {data}
};

export default useGetData;