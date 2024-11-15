import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styles from './BarChart.module.css';

const data = [
  { name: 'firewall', value: 333823 },
  { name: 'windows', value: 289877 },
  { name: 'O365', value: 207712 },
];

const BarChart = () => {
  return (
    <div className={styles.container}>
      {/* Heading for the chart */}
      <div className={styles.heading}>
        <h5 className={styles.headingText}>Unresolved Critical SOC Incident</h5>
      </div>

      {/* Bar Chart */}
      <div style={{ height: '250px' }}> {/* Reduced height */}
        <ResponsiveBar
          data={data}
          keys={['value']} // Since there is only one value per category
          indexBy="name" // Using "name" as the category
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          padding={0.3}
          innerPadding={2}
          axisBottom={{
            tickSize: 5, // Adds a line for X-axis
            tickPadding: 5,
            tickRotation: 0,
            tickValues: [], // Remove the tick values (labels) on X-axis
            legend: 'Service Name',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5, // Adds a line for Y-axis
            tickPadding: 5,
            tickRotation: 0,
            tickValues: [], // Remove the tick values (labels) on Y-axis
            
            legendPosition: 'middle',
            legendOffset: -60,
            domain: {
              line: {
                stroke: '#aaa', // Y-axis line color
                strokeWidth: 1,
              },
            },
          }}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: '#aaa', // Axis line color
                },
              },
              legend: {
                text: {
                  fill: '#aaa', // Legend text color
                },
              },
              ticks: {
                line: {
                  stroke: '#aaa',
                  strokeWidth: 1,
                },
                text: {
                  fill: 'transparent', // Hide tick text
                },
              },
            },
            grid: {
              line: {
                stroke: '#ddd', // Grid line color
                strokeWidth: 1,
                strokeDasharray: '5 5', // Dashed grid lines
              },
            },
            legends: {
              text: {
                fill: '#aaa', // Legend text color
              },
            },
            tooltip: {
              container: {
                background: '#222',
                color: '#fff',
              },
            },
          }}
          labelSkipWidth={12} // Skips labels based on width
          labelSkipHeight={12} // Skips labels based on height
          labelTextColor="transparent" // Hides the label text
          borderRadius={4}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
          }}
          colors={(bar) => {
            // Change color based on the name of the service
            if (bar.indexValue === 'firewall') return 'green';
            if (bar.indexValue === 'windows') return 'red';
            if (bar.indexValue === 'O365') return 'orange';
            return '#000'; // Default color
          }} // Custom color based on the name
          // Add names on top of bars
          label={(bar) => bar.indexValue} // Display the name of each service
          labelTextColor="#fff" // Text color for names
          labelYOffset={-15} // Adjusts the position of names above the bars
        />
      </div>
    </div>
  );
};

export default BarChart;

