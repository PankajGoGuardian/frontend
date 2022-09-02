import React, {useState, useEffect} from 'react'
import Header from "./Header"
import ClassDetail from "./ClassDetail"
import Footer from "./Footer"
import { useParams } from 'react-router-dom';
import {getData} from "./store/features/dataSlice.js"
import {useDispatch, useSelector} from "react-redux"
import Navbar from './Navbar';
// import axios from "axios"

function ClassPage() {
  const {classId} = useParams()
    const dispatch = useDispatch()
    // console.log(classId)
    const [classInfo, setClassInfo]=useState({})
    const [users, setUsers]=useState([])

    useEffect(()=>{
      dispatch(getData(classId))
    }, [])

    const data = useSelector((state)=>state.data.data.data)

    useEffect(()=>{
      if(data && data.classInfo && data.users){
        setClassInfo(data.classInfo)
        setUsers(data.users)
      }

    }, [data])

    // console.log(data.users, data.classInfo)
  return (
    
    <div className='components'>
        <Header classInfo={classInfo}/>
        <ClassDetail classInfo={classInfo} />
        <Footer users={users} classId={classId} /> 
    </div>
    
  )
}

export default ClassPage