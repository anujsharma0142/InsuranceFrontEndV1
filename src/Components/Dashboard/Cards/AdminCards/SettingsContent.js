import React from 'react'
import { Card } from 'antd';

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

const SettingsContent = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card title={<span style={titleStyle}>Tax Settings</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>Insuarance Settings</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>Add City</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>View City</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>Add State</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
    <Card title={<span style={titleStyle}>View State</span>} style={cardStyle}>
      <p style={contentStyle}>Card content</p>
    </Card>
   
  </div>
  )
}

export default SettingsContent