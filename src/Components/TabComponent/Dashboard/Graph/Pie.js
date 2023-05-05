import React from 'react';
import ReactApexCharts from 'react-apexcharts';

export default function Pie({ horizontals, vals, ChartType }) {
  // Options for the chart component
  const options = {
    chart: {
      width: '100%', // Set chart width to 100%
    },
    labels: horizontals, // Horizontal axis labels for chart data
    legend: { position: 'left' }, // Set legend position to left of chart
    dataLabels: {
      enabled: false, // Disable data labels in the chart
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 240, // Set chart width to 240px at the specified breakpoint
          },
        },
      },
    ],
    fill: {
      opacity: 0.8, // Set opacity for chart fill
    },
    colors: ['#1C4E80', '#DBAE58', '#202020'], // Array of color values for the chart series
  };

  // Render a div containing the ApexChart component with provided props and options
  return (
    <div id="chart">
      <ReactApexCharts options={options} series={vals} type={ChartType} width={310} />
    </div>
  );
}
