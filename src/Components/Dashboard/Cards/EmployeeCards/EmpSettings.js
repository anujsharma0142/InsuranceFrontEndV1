import { Card } from 'antd';
import React from 'react';

const cardStyle = {
    flex: 1,
    margin: 10,
    width : 350,
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // set background color with opacity
    color: '#fff', // set font color to white
    textAlign: 'center' // center align card content
  }
  
  const titleStyle = {
    color: '#ddd' // set font color to a lighter shade of gray
  }
  
  const contentStyle = {
    color: '#ddd' // set font color to a lighter shade of gray
  }

const EmpSettings = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card title={<span style={titleStyle}>Profile</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>Change Password</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
  </div>
  )
}

export default EmpSettings