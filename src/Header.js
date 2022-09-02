import React from 'react'
import "./App.css"
import 'antd/dist/antd.css';
import 'antd-button-color/dist/css/style.css';
import {Button} from "antd"
import {PlusCircleFilled, PlusSquareOutlined, UserOutlined } from "@ant-design/icons"
import { FundProjectionScreenOutlined } from "@ant-design/icons"
import {AiFillPlusCircle, AiOutlineUser} from "react-icons/ai"
import {BsFilePlus}  from "react-icons/bs"


function Header({classInfo}) {
  return (
    <div>
        <div className='header'  > 
          <div className='iconBoard' >< FundProjectionScreenOutlined /></div>
          <div className='header2'> 
            <span  align="left" className="text-2xl">{classInfo.name}</span>
            <br/>
            <span align="left" className="header3" >X-Mansion, chethan canvas school1</span>
          </div>
          <div class="buttons">
                <Button type='success' icon={<AiOutlineUser className='inline-flex pr-2 text-2xl'/>} style={{ background: "white", borderColor: "blue", color:"#2f3edd" }} className='buttonH1' onClick={()=>alert("synced with google classroom")}>SYNC WITH GOOGLE CLASSROOM</Button>
                <Button type='primary' icon={<AiFillPlusCircle className='inline-flex pr-2 text-2xl'/>} className='buttonH2' onClick={()=>alert("CO-TEACHER ADDED")}>ADD CO-TEACHER</Button>
                <Button type='primary' icon={ <BsFilePlus className='inline-flex pr-2 text-2xl' />} className='buttonH3' onClick={()=>alert("TEST IS ASSIGNED")}>ASSIGN TEST</Button>
          </div>
        </div>
   
        <hr class="line" />
        

    </div> 
  )
}

export default Header