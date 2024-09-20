
import React from "react";
import { Chart as Chartjs, registerables } from "chart.js/auto";
import { Bar} from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the datalabels plugin

// Register the plugin
Chartjs.register(...registerables, ChartDataLabels);

const Chart = () => {
  return (
    <div className="col-12">
      <Bar
        data={{
          labels: [
            `Algorithms `,
            `Object program`,
            `Database program`,
            `Web develop`,
            `Mobile application`,
            `Machine learning`,
          ],
          datasets: [
            {
              label: "", // Empty label to remove legend entry
              data: [85.3, 64.7, 84.2, 45.6, 43.5, 74.4],
              backgroundColor: ["#3E53A0"],
              barPercentage: 0.5,
              barThickness: 90,
              maxBarThickness: 30,
              minBarLength: 2,
              borderRadius: 6,
              maxRotation:0,
              minRotation:0,
              
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false, // Hides the legend
            },
            datalabels: {
              anchor: 'end', // Positioning the labels above the bars
              align: 'end', // Align the label to the end (top) of the bar
              formatter: (value) => value.toFixed(1), // Format the number (optional)
              color: '#000', // Set label color
              font: {
                size: 19, // Set font size
                weight: 'bold' // Set font weight
              }
            },
            
          },
          scales: {
            y: {
              ticks: {
                maxRotation: 0, 
                minRotation: 0,
                display: false, // Hides the numbers on the Y-axis
                
              },
              grid: {
                display: false, // Hides grid lines on the Y-axis
              },
              border: {
                display: false, // Hides the Y-axis line itself
              },
            },
            x: {
              grid: {
                display: false, // Hides the grid lines on the X-axis
              },
              border: {
                display: false, // Hides the X-axis line itself
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;


