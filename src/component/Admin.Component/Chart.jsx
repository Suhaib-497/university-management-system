import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const VisitorAnalyticsChart = () => {
  const data = {
    labels: ["Students", "Faculty"],
    datasets: [
      {
        data: [34, 45], // Data for chart sections
        backgroundColor: ["#4285F4", "#66C2E0"], // Colors
        hoverBackgroundColor: ["#357ABD", "#5A9EC6"],
        borderWidth: 0,
      },
    ],
  };

  // Custom plugin to draw text in the center
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width } = chart;
      const ctx = chart.ctx;
      const ctx2 = chart.ctx;

      ctx.save();
       // Save the current state of the canvas

      // Set font and alignment for the text
      ctx.font = "22px sans-serif";
      ctx.fillStyle = "#000"; // Black color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      

      // Calculate the center of the chart
      const x = width / 2;
      const y = chart.chartArea.top + (chart.chartArea.height / 2);

      // Draw the text in the center
      ctx.fillText("2548 ", x, y);
      ctx.fillText(" Visitors", x, y+20);

      ctx.restore(); 
      // Restore the canvas state
    },
  };

  useEffect(() => {
    // Register the plugin
    Chart.register(centerTextPlugin);
  }, []);

  const options = {
    cutout: "70%", // Makes the chart a donut
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
      datalabels: {
        display: false, // Disable the data labels
      },
    },
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h4 style={{ textAlign: "center" }}>Visitors Analytics</h4>
      <Doughnut data={data} options={options} />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ color: "#4285F4", fontWeight: "bold" }}>Students: 34%</p>
        <p style={{ color: "#66C2E0", fontWeight: "bold" }}>Faculty: 45%</p>
      </div>
    </div>
  );
};

export default VisitorAnalyticsChart;
