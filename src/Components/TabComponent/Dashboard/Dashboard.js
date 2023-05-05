// Importing necessary dependencies and components from external libraries
import React, { useEffect, useState } from 'react';
import { Divider, Badge, Spin, Descriptions } from 'antd';
import PieChart from './Graph/Pie';
import axios from 'axios';
import ActiveInactive from './Graph/Active';
import ManagerBar from './Graph/ManagerBar';
import ProjectBar from './Graph/ProjectBar';
import { Card } from '@mui/material';

export default function Dashboard() {
  // Setting up state variables using the useState hook
  const [loading, setLoading] = useState(true); // Loading spinner variable
  const [data, setData] = useState({}); // Data object to store fetched API data

  // Fetching data from API using the useEffect hook
  useEffect(() => {
    async function fetchData() {
      try {
        // Sending a GET request to the API and storing the response in the data state variable
        const res = await axios.get('http://35.154.232.92:8080/starapp/api/v1/report/horizontal', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Authorization header with JWT token
            'Access-Control-Allow-Origin': '*', // CORS header to allow cross-origin requests
          },
        });
        setData(res.data); // Updating the data state variable with the fetched data
        setLoading(false); // Setting the loading spinner variable to false
      } catch (error) {
        console.log(error); // Logging any errors that occur during the fetch request
      }
    }
    fetchData(); // Calling the API fetch function on mount (useEffect with empty dependency array)
  }, []);

  // Returning the dashboard component with conditional rendering based on the loading variable
  return (
    <div>
      {loading ? (
        <div style={{ height: '90vh', width: '170vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          {/* Rendered if the API data has been fetched successfully */}
          <h6 className="mx-2" style={{ color: 'rgba(4,51,101, 1);', fontSize: '12px', fontWeight: 'bold' }}>
            Org. level Quarterly analysis
          </h6>
          <div className="container">
            <div className="row content-align-center">
              <Card className="col-md-4 pt-2">
                <div className="text-center small">
                  <small>Extra hours claimed in each Horizontal</small>
                </div>
                <PieChart horizontals={data.horizontals} vals={data.overUtilizedHours} ChartType="pie" /> // Rendering a pie chart component with data from the fetched API response
              </Card>
              <Card className="col-md-4 mx-2 pt-2">
                <div className="text-center small">
                  <small>Under utilized hours in each Horizontal</small>
                </div>
                <PieChart horizontals={data.horizontals} vals={data.underUtilizedHours} ChartType="donut" /> // Rendering a donut chart component with data from the fetched API response
              </Card>
              <Card className="py-2 px-2 col-md-3 mx-2">
                <ActiveInactive hData={data} /> // Rendering an active/inactive bar chart component with data from the fetched API response
              </Card>
              <Card className="col-md-6 mt-2 pt-2">
                <p className="text-center small">
                  <small>Resource utilization of projects under Delivery</small>
                </p>
                <ProjectBar projectData={data.data} /> // Rendering a bar chart component with project utilization data from the fetched API response
              </Card>
              <Card className="col-md-5 mt-2 mx-3 pt-2">
                <p className="text-center small">
                  <small>Hours approved by each manager</small>
                </p>
                <ManagerBar projectData={data.managers} /> // Rendering a bar chart component with manager approval data from the fetched API response
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
