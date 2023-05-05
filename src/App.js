// Importing necessary modules and components
import './App.css'; // Stylesheet for App component 
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'; // React routing components 
import Login from './Components/Login/login'; // Login component 
import React from 'react'; // React library 
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AgentDashboard from './Components/Dashboard/AgentDashboard';
import UserDashboard from './Components/Dashboard/UserDashboard';

function App() {
  return (
    <BrowserRouter> 
      <Routes >
        <Route exact path="/" element={<Login/>}/> {/*Route for the actual login page*/} 
        <Route exact path="/admin" element={<AdminDashboard/>}/>
        <Route exact path="/employee" element={<EmployeeDashboard/>}/>
        <Route exact path="/agent" element={<AgentDashboard/>}/>
        <Route exact path="/user" element={<UserDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting App component
