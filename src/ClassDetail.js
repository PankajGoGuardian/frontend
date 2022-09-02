import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./App.css"
// import { responsiveArray } from 'antd/lib/_util/responsiveObserve'
import image from "./image.png"



function ClassDetail({classInfo}) {

    // const [docu,setDocu]=useState([]);
    
    // useEffect(()=>{
    //     axios
    //         .get(`http://localhost:5000/${classId}`)
    //         .then(res=>{
    //             // console.log(res.data)
    //             setDocu([res.data.classInfo])
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // },[]);
    // console.log("classId",classId)
    // const dat = data.classInfo.toArray()
    // console.log("dat", dat)
    // console.log(classInfo,"ooooooooooooo")
  return (
        
            
                
                <div class="cointainer2">
                    <div class="shoot"> Manage class / {classInfo.section}</div>
                    <div>
                    
                        <img class="iconDetails" alt="image available" src={image} />
                        <div id="container">
                            <div class="box5">CLASS CODE <span className="greenText1" >{classInfo.code}</span></div>
                            <div class="box6"> TOTAL STUDENTS <span className="greenText" >{classInfo.total}</span></div>
                            <div class="box6">TEACHER <span className="greenText" >{classInfo.teacher}</span></div>
                        </div>
                        <div id="container">
                            <div class="box1">GRADE <span className='props_'> {classInfo.grade}</span></div>
                            <div class="box2"> SUBJECT <span className='props_'>{classInfo.subject}</span></div>
                            <div class="box4"> STANDARD <span className='props_'>{classInfo.standard}</span></div>
                    
                        </div>
                        <div id="container">
                            <div class="box1">START DATE <span className='props_'>{classInfo.start}</span></div>
                            <div class="box2"> END DATE <span className='props_'>{classInfo.end}</span></div>
                        </div>
                        <div id="container">
                            <div class="box8"> LAST SYNC <span className='props_'>{classInfo.lastsync}</span></div>
                        </div>
                        <div id="container">
                            <div class="box9"> CANVAS SECTION <span className='props_'>{classInfo.section}</span></div>
                            <div class="box10"> CANVAS COURSE <span className='props_'>{classInfo.course}</span></div>
                        </div>

                    </div>

                
                <hr/>
                </div>
                

    
    
  )
  }



export default ClassDetail