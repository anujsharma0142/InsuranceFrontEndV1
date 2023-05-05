import React, { useEffect, useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import { Spin } from 'antd';

export default function ManagerBar({ projectData }) {
  const [projectName, setProjectName] = useState([]); // State variable to hold the names of the projects
  const [extraHour, setExtraHour] = useState([]); // State variable to hold the extra hours for each project
  const [underUtil, setUnderUtil] = useState([]); // State variable to hold the underutilized hours for each project
  const [loading, setLoading] = useState(true); // State variable to indicate if data is still being loaded

  useEffect(() => {
    const dataEntries = Object.entries(projectData); // Get an array of key-value pairs from projectData object
    setProjectName(dataEntries.map(([key]) => key)); // Extract the keys (project names) and set them in state
    setExtraHour(dataEntries.map(([, value]) => value.first)); // Extract the first values (extra hours) and set them in state
    setUnderUtil(dataEntries.map(([, value]) => value.second)); // Extract the second values (underutilized hours) and set them in state
    setLoading(false); // Set loading to false once the data is processed and stored in state
  }, [projectData]); // Run this effect whenever projectData prop changes

  // Define the series and options objects for ApexCharts
  const series = [
    {
      name: 'Extra Hours Claimed',
      data: extraHour,
    },
    {
      name: 'Under Utilized Hours',
      data: underUtil,
    },
  ];
  const options = {
    chart: {
      type: 'bar',
      width: '100%',
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: projectName,
    },
    colors: ['#1C4E80', '#DBAE58', '#202020'],
    grid: {
      borderColor: '#FFFFFF',
      padding: 0,
    },
  };

  return (
    <div>
      {loading ? ( // When data is still loading, show a spinner
        <div
          style={{
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      ) : ( // Otherwise, show the chart using ApexCharts
        <div id="chart">
          <ReactApexCharts options={options} series={series} type="bar" height={'240vh'} />
        </div>
      )}
    </div>
  );
}
