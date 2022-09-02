import React from 'react'
import { FundProjectionScreenOutlined } from "@ant-design/icons"
import {Button, Space} from "antd"
import "./App.css"
import {AiFillPlusCircle} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {PlusCircleFilled, PlusSquareOutlined, UserOutlined } from "@ant-design/icons"

function Header2() {
  return (
    <div className='inline-flex'>
        <div className='text-xl pl-8' >< FundProjectionScreenOutlined /></div>
        <div className=' pl-2 text-3xl'>Manage Class</div>
        <div className='butt'>
        <Space>
        <Button type=""  icon={<BsFillPersonFill className='inline-flex pr-2 text-2xl'/>} style={{ background: "white", borderColor: "blue", color:"#2f3edd"}} className="buttSynced" >SYNC WITH GOOGLE CLASSROOM</Button>
        <Button type="primary" icon={<AiFillPlusCircle className='inline-flex pr-2 text-2xl'/>}>CREATE CLASS</Button>
        </Space>
        
        </div>
    </div>
  )
}

export default Header2