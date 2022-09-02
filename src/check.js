import React, {useState} from "react"
const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = ()=>{
    setIsModalVisible(!isModalVisible)
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
