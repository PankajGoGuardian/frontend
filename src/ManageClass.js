import 'antd/dist/antd.min.css'
import React, { useEffect, useState } from 'react'
import {Table} from "antd"
import  axios from 'axios'
import Navbar from './Navbar'
import "./App.css"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getClassData} from "../src/store/features/classDataSlice"
import Header2 from './Header2'

import { useNavigate } from 'react-router-dom'

function ManageClass() {

    const navigate= useNavigate()

    const [data,setData] = useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:5000/manageclass")
    //         .then((res)=>setData(res.data))
    //         .catch((err)=>console.log("err", err))
    // }, [])

    // console.log(data)

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getClassData())
    },[])

    const dta = useSelector((state)=>state.classData.data.data)

    useEffect(()=>{
      if (dta){
        setData(dta)
      } 
    })

    // // console.log(dta)

    // useEffect(()=>{
    //   setData(dta)
    // })

    const dataSource = 
    
    data.map((ans)=>{

        return(
            {
                key: ans._id,
                name:ans.name,
                grade: ans.grade,
                subject: ans.subject,
                classCode: ans.code,
                teacher: ans.teacher,
                students: ans.total
            }
        )
    })
    
      
      const columns = [

        {
          title: 'CLASS NAME',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['ascend'],
          
        },
        {
          title: 'CLASS CODE',
          dataIndex: 'classCode',
          key: 'classCode',
      },
        {
          title: 'GRADE',
          dataIndex: 'grade',
          key: 'grade',
          sorter: (a, b) => a.grade.length - b.grade.length,
          sortDirections: ['descend'],
        },
        {
          title: 'SUBJECT',
          dataIndex: 'subject',
          key: 'subject',
          sorter: (a, b) => a.subject.length - b.subject.length,
          sortDirections: ['descend'],
        },
        
        {
            title: 'TEACHER',
            dataIndex: 'teacher',
            key: 'teacher',
        },
        {
            title: 'TOTAL STUDENTS',
            dataIndex: 'students',
            key: 'students',
          sorter: (a, b) => a.students - b.students
        },
        
      ];

      const [selectedRowKeys, setSelectedRowKeys] = useState([])
      
  return (
    <>
      
    
    <div className='table'>
        <Header2 />
        <br/>
        <br/>
        <hr />
        <Table dataSource={dataSource} columns={columns} className="pt-15" onRow={(record, rowIndex) => {
    return {
      onClick: () => {
        navigate(`/manageclass/${record.key}`)
        console.log(record, rowIndex)
        }, // click row
    };
  }} />
    </div>
    </>
  )
}

export default ManageClass