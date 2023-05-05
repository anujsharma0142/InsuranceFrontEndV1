import React from 'react'
import { Card } from 'antd';

const cardStyle = {
    flex: 1,
    margin: 10,
    width : 350,
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // set background color with opacity
    color: '#fff', // set font color to white
    textAlign: 'center' // center align card content
  }
  
  const titleStyle = {
    color: '#ddd' // set font color to a lighter shade of gray
  }
  
  const contentStyle = {
    color: '#ddd' ,// set font color to a lighter shade of gray
    fontSize: '18px'
  }


const InsurancePlan = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card title={<span style={titleStyle}>Protection Plans</span>} style={cardStyle}>
      <p style={contentStyle}>A protection plan is a life insurance plan that offers you financial coverage wherein the insurance company agrees to pay you a certain amount in the case of an unfortunate event during the policy tenure.</p>
    </Card>
    <Card title={<span style={titleStyle}>Child Plans</span>} style={cardStyle}>
      <p style={contentStyle}>Child insurance plan is an investment cum insurance plan from life insurance companies, which offers financial safety to your child’s dreams and goals. You can use a child insurance plan to invest in the big life goals of your child like higher education and marriage</p>
    </Card>
    <Card title={<span style={titleStyle}>Savings Plans</span>} style={cardStyle}>
      <p style={contentStyle}>A savings insurance plan is a life insurance plan that lets the policyholder save and invest his money to financially secure himself and his loved ones also providing steady returns that support you in achieving your financial goals</p>
    </Card>
    <Card title={<span style={titleStyle}>Growth Plans</span>} style={cardStyle}>
      <p style={contentStyle}>
Growth plans offer the policyholder the dual benefit of protection and growth for their investment. These plans offer a wide range of investment options that provide flexibility according to your risk appetite and time periods.</p>
    </Card>
    <Card title={<span style={titleStyle}>Group Plans</span>} style={cardStyle}>
      <p style={contentStyle}>Group insurance is a type of insurance plan that covers a number of people in the same contract. Such a plan provides the same level of insurance coverage to all members of a group irrespective of their age, gender, occupation or socio-economic status</p>
    </Card>
  </div>
  )
}

export default InsurancePlan