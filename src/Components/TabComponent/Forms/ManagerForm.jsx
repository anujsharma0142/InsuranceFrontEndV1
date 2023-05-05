import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { CheckCircleOutlined, CloseCircleOutlined, } from '@ant-design/icons';
import { Divider, Tag, Space } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AcceptRejctButton({name, timesheetId, userId, manId, fetchData}) {
  const [open, setOpen] = React.useState(false);
  const [resText, setResText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClickClose = () => {
    setOpen(false);
  };
  
 
  const handleInputChange = (event) => {
    // debugger;
    setResText(event.target.value);
  };

  const handleClose = (isApproved) => {
    var status = "Rejected";
    if (isApproved) status = "Approved";
    const formData = {
      'id':timesheetId,
      'userId':manId,
      'responseText':resText,
      'isApproved':isApproved
    };
    const emailData = {
      'id':timesheetId,
      'managerId': manId,
      'userId': userId,
      'responseText': resText,
      'isApproved': isApproved,
    };
    const mailOption = {
      method: 'POST',
      url: 'http://localhost:8084/api/v1/request/sendmail',
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      },
      data: emailData,
    };
    const options = {
        method: 'POST',
        url: 'http://localhost:8084/api/v1/request/manager',
        headers: {
          Authorization : `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        },
        data: formData,
    };
    axios.request(options)
    .then((response) => {
      // uncomment below lines to start mail services again
      axios.request(mailOption).then((response) => {
        console.log(response)
      }).catch((error) => {   
        console.log(error);
      });
      setOpen(false);
      toast(`Successfully ${status}`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
      });
      fetchData();
    })
    .catch((error) => {
      setOpen(false);
    });

  };

  return (
    <div>
      <Space  onClick={handleClickOpen} >
        <a color="text-action"  style={{'text-decoration':'none'}} className='py-1'>{name}</a>
      </Space>
      <Dialog open={open} onClose={handleClose} >
        <DialogContent style={{margin:0, padding:0}}>
          
          <div className='d-flex btn justify-content-end'>
            <DialogContentText className="btn">
              Give a brief insight as to why you are accepting or rejecting
            </DialogContentText>
            <div className='d-flex btn text-danger justify-content-end' onClick={handleClickClose}>X</div>
          </div>
          <Divider style={{margin:0, padding:1}}></Divider>
          <div className="mx-4">
          <TextField autoFocus className='mt-2' label="message" type="text" onChange={handleInputChange} fullWidth variant="standard"/></div>
        </DialogContent>
        <DialogActions className='mx-2'>
          <Button class="btn" onClick={() => handleClose(true)}>
            <Tag icon={<CheckCircleOutlined/>} color="success" className='py-1 px-2'>Accept</Tag>
          </Button>
          <Button class="btn" onClick={() => handleClose(false)}>
            <Tag icon={<CloseCircleOutlined/>} color="error" className='py-1 px-2'>Reject</Tag>
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
}