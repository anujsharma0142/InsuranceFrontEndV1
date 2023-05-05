import React from 'react';
import ReactApexCharts from 'react-apexcharts';

// Declare a functional component called ManagerBar that accepts two props `names` and `vals`
const ManagerBar = ({ names, vals }) => {

  // Define the data series for the chart using the `vals` prop passed in 
  const series = [{
    name: 'Extra Hours Approved',
    data: vals
  }];

  // Define the options for the chart
  const options = {
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: true,
      },
    },
    dataLabels: {
      // Hide the data labels
      enabled: false
    },
    xaxis: {
      // Set the x-axis categories to the `names` prop passed in
      categories: names,
    },
    grid: {
      // Set the border color of the grid to white
      borderColor: '#FFFFFF',
      padding: {
        // Remove all padding from the grid
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    // Set the color of the bars to be displayed in the chart
    colors:['#1C4E80'],
  };

  // Render the chart with the given options, series and height
  return (
    <div id="chart">
      <ReactApexCharts options={options} series={series} type="bar" height={'400px'} />
    </div>
  );
}

// Export the ManagerBar component as the default export of this module
export default ManagerBar;
