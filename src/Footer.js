import 'antd/dist/antd.min.css'
import "./App.css"
// import 'antd/dist/antd.less'
// import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import joi from "joi"
import "./App.css"
import React, {useState, useEffect} from 'react'
import {Table, Button, Dropdown, Menu, Space, Modal, Form, Input, Switch, form}  from "antd"
import {PlusCircleFilled, PrinterFilled, PlusOutlined, SoundFilled, UserAddOutlined, ExclamationCircleFilled , QuestionCircleFilled , CloseCircleFilled    } from "@ant-design/icons"
import axios from "axios"
import {useDispatch} from "react-redux"
import {getData} from "./store/features/dataSlice.js"
import {AiFillPlusCircle, AiFillPrinter} from "react-icons/ai"
import {BsFillPlusCircleFill} from "react-icons/bs"



function Footer({classId, users}) {

  const [checked, setChecked] = useState(true)    //switch button functionality
  const handleClick = () => setChecked(!checked)
  const [edit, setEdit]=useState(false)
  const dispatch=useDispatch()
  console.log("classId, users", classId, users)
  //-------------------------menu for Action button-------------------------------
  
  const menu = (
    <Menu
    items={[
      {
        key: '1',
        label: "Enable Text To Speech",
        icon: <SoundFilled /> 
      },
      {
        key: '2',
        label: "Disable Text To Speech",
        icon: <PlusCircleFilled />
      },
      {
        key: '3',
        label: "Remove Student",
        icon: <CloseCircleFilled />,
        onClick: ()=>setRemoveModal(true)
      },
      {
        key: '4',
        label: "Reset Password",
        icon: <QuestionCircleFilled />
        
      },
      {
        key: '5',
        label: "Edit Student",
        icon: <PlusCircleFilled />,
        onClick: ()=>{
          setEdit(true)
          showModal(false)
          // if(edit){
          // showModal()
          // console.log(edit, "in edit student key block")}
        }
      },
      {
        key: '6',
        label:" Add to Group",
        icon: <PlusOutlined />
      },
      {
        key: '7',
        label: "Merge Students",
        icon: <PlusCircleFilled />
      }
      
     
    ]}
  />
  );
  
  // const [data,setData]=useState([])    // data fetching to fill dataSource
  // const [res, setRes] = useState([])
  // console.log(classId)
  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/${classId}`)
  //         .then(res=>{
  //           // console.log(res.data)
  //           setData(res.data.users)
  //         })
  //         .catch(err=>{
  //           console.log(err)
  //         })

  // }, [JSON.stringify(data)])

  // console.log(JSON.stringify(data))


  let res = []
  if (!checked){
    res=users.filter(all=>(all.role=="student")&&(all.status==true) )
  }else{
  res=users.filter(res=>(res.role=="student"))}
  const dataSource =

    (res.map((ans)=>{
      let date = new Date(ans.updatedOn).toString()
      return(
            
              {
                key: ans._id.toString(),
                NAME: ans.firstName+ " " + ans.middleName+ " " +ans.lastName,
                firstName:ans.firstName,
                middleName:ans.middleName,
                lastName:ans.lastName,
                USERNAME: ans.username,
                STATUS: (ans.status == true ? "Active": <p ><ExclamationCircleFilled style={{ color: "red" }} /> Student not enrolled after {(date).slice(4,10)},{(date).slice(11,15)}</p>)
              }
            
      )
        

    }))
      const columns = [
        {
          title: 'NAME',
          dataIndex: 'NAME',
          key: 'NAME',
          // render: 
          
        },
        {
          title: 'USERNAME',
          dataIndex: 'USERNAME',
          key: 'USERNAME',
        },
        {
          title: 'TTS ENABLED',
          dataIndex: 'TTS ENABLED',
          key: 'TTS ENABLED',
        },
        {
          title: 'STATUS',
          dataIndex: 'STATUS',
          key: 'STATUS',
        },
      ];
      const [selectedRowKeys, setSelectedRowKeys] = useState([]);
      const [selectedRows, setSelectedRows] = useState([])

     const onSelectChange = (newSelectedRowKeys, newSelectedRows) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedRows(newSelectedRows)
  };
  // console.log(selectedRows[0].key)
  // useEffect(()=>{})
  const rowSelection = {
    selectedRowKeys, selectedRows,
    onChange: onSelectChange}
    
    // console.log(selectedRowKeys)
    // console.log(selectedRows)


  // console.log(selectedRowKeys)

  // modal pop up function for "add student button"
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [removeModal, setRemoveModal] = useState(false)
  const [removal,setRemoval]=useState("")
  const [fname,setFname] = useState("")
  const [mname,setMname] = useState("")
  const [lname,setLname] = useState("")
  const [username,setUsername]=useState("")
  // const [buttonDisabled, setButtonDisabled] = useState(false)
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

//   const userValidator=(user)=>{
//     const JoiSchema = joi.object({
//         username: joi.string()
//                     .email()
//                     .min(5)
//                     .max(50)
//                     .required(),
//         password: joi.string()
//                     .min(1)
//                     .max(30)
//                     .required(),
//         firstName: joi.string()
//                     .min(1)
//                     .max(30)
//                     .required(),
//         middleName: joi.string()
//                     .min(0)
//                     .max(30),
                    
//         middleName: joi.string()
//                     .min(0)
//                     .max(30),
//         lastName: joi.string()
//                     .min(0)
//                     .max(30),
//         status: joi.string(),
//         role: joi.string(),
//         classId: joi.string(),
//         key:    joi.string()


                    
//     })
//     return JoiSchema.validate(user)
// }

  // let body ={}
  // console.log(data)
  const showModal = (_edit)=>{
    if (!_edit){
      console.log(edit, "in edit=true")
      if(!selectedRows.length){return alert("no row is selected")}
      else if(selectedRows.length>1){
        return alert("while editing you can choose only one row")
      }
      
    setFname(selectedRows[0].firstName)
    setUsername(selectedRows[0].USERNAME)
    setLname(selectedRows[0].lastName)
    setMname(selectedRows[0].middleName)}else if(_edit===true){
      console.log(edit, "in edit=false")
      setFname("")
      setUsername("")
      setLname("")
      setMname("")
    }
    setIsModalVisible(true)
  }
  // console.log(username)
  const handleOk = async () => {

    setIsModalVisible(false)
    setFname("")
    setUsername("")
    setLname("")
    setMname("")
    setPassword("")
    setConfirmPassword("")
    
    // console.log(res.status)s
    if(!edit){
      let body = {
        "firstName": fname,
        "username":username,
        "status": "Active",
        "role" : "student",
        "classId":  classId,
        "middleName": mname,
        "lastName": lname,
        "password":password
  
      }
      const res = await axios.post("http://localhost:5000/postuser", body)
      console.log({status:res.status})
    if(res.status==201){
      dispatch(getData(classId))
      // setData(data)
    }else if(res.status==205){
      const hello =()=>alert("username is not valid")
      hello()
    }else{
      const hi =()=>alert("user is already enrolled")
      hi()
    }

  }else{
    setEdit(false)
    let body = {
      "firstName": fname,
      "username":username,
      "status": "Active",
      "role" : "student",
      "classId":  classId,
      "middleName": mname,
      "lastName": lname,
      "password":password,
      "key":selectedRows[0].key

    }
    const res = await axios.post("http://localhost:5000/updateuser", body)
    if(res.status==201){
      dispatch(getData(classId))
      // setData(data)
    }else if(res.status==205){
      const hello =()=>alert("username is not valid")
      hello()
    }else{
      const hi =()=>alert("username is already in use")
      hi()
    }
  }

    
    // console.log("-------------------------------------------")
    
  };

  const buttonDisabled = ()=>{
    if ((fname!="") && (username!="") &&((password === confirmPassword) && password.length>=3)){
      return false
    }else{
      return true
    }
  }

  const removeButtonDisabled = ()=>{
    if (removal.toLowerCase() == "remove"){
      return false
    }
    return true
  }
  

  const handleCancel = () => {
    setFname("")
    setUsername("")
    setLname("")
    setMname("")
    setPassword("")
    setConfirmPassword("")
    if (edit){setEdit(false)}
    setIsModalVisible(false);
    
  };

  const removeOk=async ()=>{
    // console.log("button is pressed")
    setRemoval("")
    setRemoveModal(false)
    if(selectedRowKeys.length==0){
      alert("No row is selected!")
    }else{
      try {

       const res = await axios.post("http://localhost:5000/statusupdate", {"rowKeys": selectedRowKeys,
                                              "classId":classId} )
            
        if (res.status==201){
          dispatch(getData(classId))
        }
    
        
      } catch (error) {
        console.log(error)
      }
    
    }
  }


  


 const fields = [
                  {
                    name:["email"],
                    value: username
                  },{
                    name:["FIRST NAME"],
                    value: fname
                  },{
                    name:["MIDDLE NAME"],
                    value: mname
                  }, {
                    name:["LAST NAME"],
                    value: lname
                  },{
                    name:["password"],
                    value: password
                  },{
                    name:["confirm"],
                    value: confirmPassword
                  }
                ]
                        



  return (
    <div>
        {/* <div className='switch' align="left"> */}
        <div className='inline-flex pb-5 pt-2'>
        <div className='pt-2'>
        <span style={{fontSize: 10, color:"gray", marginLeft: "15px"}}>SHOW ACTIVE STUDENTS </span>
        <Switch defaultUnChecked size="small" onChange={handleClick} unCheckedChildren="OFF" checkedChildren="ON" />
        </div>
        
        <div align="right" className='footerButtons' >
          
          <Button type='info'  icon= {<BsFillPlusCircleFill className='inline-flex pr-2 text-2xl' style={{color: "green"}}/>}style={{ background: "white", borderColor: "green", color: "green", alignItems: "center" }} className='buttonF1 items-center' onClick={showModal}>ADD STUDENT</Button>
          <Button type='primary' icon= {<AiFillPlusCircle className='inline-flex pr-2 text-2xl' />} style={{ background: "green"}} className='buttonF2' onClick={()=>alert("MULTIPLE STUDENTS ADDED")}>ADD MULTIPLE STUDENTS</Button>
          <Button type='info'  icon={<AiFillPrinter className='inline-flex pr-2 text-2xl' />} style={{ background: "white", borderColor: "green",color:"green" }} className='buttonF3' onClick={()=>alert("SCREEN PRINTED")}>PRINT</Button>
          <Space direction="vertical">
          <Dropdown
              overlay={menu}
              // placement="bottomLeft"
              arrow={{
                pointAtCenter: true,
              }}
          >
      <Button type='info' style={{ background: "white", borderColor: "green",color:"green" }}>ACTION</Button>
    </Dropdown>
    </Space>
    </div>
    </div>
    <Modal destroyOnClose={true} icon= {<UserAddOutlined />} title={<h3 style={{color: "green"}}><UserAddOutlined />  {edit?"UPDATE USER":"ADD STUDENT"} </h3>}  visible={isModalVisible}   onOk={handleOk} onCancel={handleCancel} okButtonProps={{ disabled: buttonDisabled() }}>
          <Form labelCol={{offset: 1000}} layout="vertical" fields={fields} >
            <Form.Item
              name="email"
              label="USERNAME/E-MAIL"
              // offset="10"
              // value={}
              
              onChange={(e)=>setUsername(e.target.value)}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
          <Input />
          </Form.Item>
          <Form.Item
            name="FIRST NAME"
            label="FIRST NAME"
            onChange={(e)=>setFname(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
                whitespace: true,
              },
            ]}
          >
        <Input />
      </Form.Item>
      <Form.Item
            name="MIDDLE NAME"
            label="MIDDLE NAME"
            onChange={(e)=>setMname(e.target.value)}
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
          
        <Input />
      </Form.Item>
      <Form.Item
            name="LAST NAME"
            label="LAST NAME"
            value={edit===true? selectedRows[0].lastName:lname}
            onChange={(e)=>setLname(e.target.value)}
            rules={[
              {
                whitespace: true,
              },
            ]}
          >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="PASSWORD"
        value={password}
        onChange = {(e)=>setPassword(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="CONFIRM PASSWORD"
        value={confirmPassword}
        onChange = {(e)=>setConfirmPassword(e.target.value)}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
        </Form>

          
          </Modal>
    <Modal 
    title="Remove Student(s)" 
    visible={removeModal} 
    okText="Yes, Remove" cancelText="No" 
    width={650}
    bodyStyle={{height: "10000"}}
    okAlign="center" onCancel={()=>{setRemoveModal(false)}} 
    onOk={removeOk} okButtonProps={{ disabled: removeButtonDisabled() }}>
        <p align="center" style={{fontWeight:"bold"}}>Are you sure you want to remove selected student(s) from the class?</p>
        
          
            <div style={{textAlign : "center", fontWeight: "bold"}}>
              {
                selectedRows.map((ans, i )=>{
                  
                  if (i==selectedRows.length-1){
                  return(
                    <span >{ans.NAME }</span>
                  )
                  }else{
                    return (
                      <span>{ans.NAME+ ","}</span>
                    )
                  }
                })
              }
            </div>
          
            {/* selectedRows.map((ans,i)=>{
                  if (i==selectedRows.length-1){
                    return (
                      <span>{ans.NAME}</span>
                    )
                  }else{
                    return (
                      <span>{ans.NAME},</span>
                    )
                  }
                }) */}
        
        <p align="center" style={{fontWeight:"bold"}}>If yes, please type <span style={{ color:"green"}}>REMOVE</span> in the space below to proceed. </p>
        {/* input {text-align: center} */}
        <p align="center"><input className="inputBox" type="text" value={removal} onChange={(e)=>setRemoval(e.target.value) } style={{ fontWeight:"bold", textAlign:"center" }} size= "55" ></input></p>
      </Modal>
      
        
      <br />
    <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection}   />
  </div>
  )
}

export default Footer
