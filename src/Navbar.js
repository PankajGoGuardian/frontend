import React, {useState} from 'react'
import {LeftCircleOutlined, BookOutlined } from "@ant-design/icons"
import {GiSpeedometer} from "react-icons/gi"
import {BiBarChartAlt2, BiChalkboard} from "react-icons/bi"
import {GiBatteryPlus} from "react-icons/gi"
import {FaEquals, FaQuestion} from "react-icons/fa"
import {CgMathEqual} from "react-icons/cg"
import {BsFillQuestionSquareFill, BsClipboardPlus} from "react-icons/bs"
import {AiFillRocket} from "react-icons/ai"
import image from "./image.png"
import { NavLink } from 'react-router-dom'
import "./App.css"

function Navbar() {
    const [open, setOpen]=useState(false)
    console.log(open)
  return (
    <div className='no_scroll'>
    <div class={`bg-slate-600 h-screen p-5 pt-5 ${open? "w-60":"w-20"} duration-500 relative overflow-x-visible z-10 position-fixed`}>
       <div className="duration-500">
        {open? <div className='inline-flex'><p className={`text-green-600 text-3xl font-bold`}>Edu</p><p className={`text-gray-300 text-3xl`}>lastic</p></div>:<p className={`text-green-600 text-3xl font-bold duration-500`}>E</p>}
       </div>
        <LeftCircleOutlined  className={`cursor-pointer text-2xl  rounded-full bg-white absolute -right-2 top-16 ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)} />
       
        <div className='pt-30'>
        <div className='inline-flex gap-x-4 pt-3'>
            <GiSpeedometer className={`cursor-pointer text-2xl `}  style={{color:"gray"}} />
            <p class={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} > Dashboard</p>
        </div>

        <div className='inline-flex gap-x-4 pt-2'>
            <GiBatteryPlus className={`cursor-pointer text-2xl `}  style={{color:"gray"}} />
            <p className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} > Assignments</p>
        </div>
        <br/>

        <div className='inline-flex gap-x-4 pt-2'>
            <FaEquals className={`cursor-pointer text-2xl `}  style={{color:"gray"}} />
            <p className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`}> Gradebook</p>
        </div>
        <br/>

        <div className='inline-flex gap-x-4 pt-2'>
            <BiBarChartAlt2 className={`cursor-pointer text-2xl `} style={{color:"gray"}} />
            <p className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} > Insights</p>
        </div>
        <br/>
        <br/>
        {open? <div className='font-bold text-gray-300 duration-500'>LIBRARY</div>:<hr/>}
        <br/>
        <div className='inline-flex gap-x-4 pt-2'>
            
            <BsFillQuestionSquareFill className={`cursor-pointer text-2xl `} style={{color:"gray"}} />
            <span className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} >Item</span>
            
        </div>
        <br/>
        

        <div className='inline-flex gap-x-4 pt-4'>
            <BsClipboardPlus className={`cursor-pointer text-2xl `}  style={{color:"gray"}} />
            <p className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} > Test</p>
        </div>
        <br/>
        <div className='inline-flex gap-x-4 pt-2'>
            
            <CgMathEqual className={`cursor-pointer text-2xl `} style={{color:"gray"}} />
            <span className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} >Playlist</span>
            
        </div>
        <br/>
        <br/>
        

        {open? 
            <div className='font-bold text-gray-300 '>
                USER MANAGEMENT
            </div>
            :
            <div className='align-center'>
                <hr/>
            </div>}

            <br/>
        
            <NavLink to={`/manageclass`} activeClassName="active" >
                <div className='inline-flex gap-x-4 pt-2 -p-2 '>
                       <BiChalkboard className={`cursor-pointer text-3xl `} style={{color:"gray"}} />
                        {open? <span className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-`} >Manage class</span>: null}
                </div>
            </NavLink>
            
            <div className="last">
            <NavLink  to="/" activeClassName="active">
                <div className='inline-flex gap-x-4 '>
                <AiFillRocket className={`cursor-pointer text-3xl `} style={{color:"gray"}} />
                <span className={`text-gray-300 ${!open && "scale-0"} duration-500 font-bold pt-1`} >Demo</span>
                </div>
            </NavLink>
            
            <br/>
            
            <div className='inline-flex gap-x-4 pt-5'>
            <FaQuestion className={`cursor-pointer text-2xl `} style={{color:"green"}} />
            <span className={`text-green-600 ${!open && "scale-0"} duration-500 font-bold pt-1`} >Help Center</span>
            
            </div>
            <div className='inline-flex gap-x-4 pt-0'>
            <img src={image} className="navIcon"/>
            <span className={`text-black-600 ${!open && "scale-0"} duration-500 font-bold pt-5`} >Teacher</span>
            
            </div>
            
            </div>
            
        
        

    </div>
    </div>
    </div>
  )
}

export default Navbar