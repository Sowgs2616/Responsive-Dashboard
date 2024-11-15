import React from 'react';
import PieChart from './charts/PieChartComponent';
import BarChart from './charts/BarChartComponent';
import DoughnutChart from './charts/DoughnutChartComponent';
import GroupedBarChart from './charts/GroupedBarChartComponent';
import './SummaryCharts.css'; // Make sure this path is correct

const SummaryCharts: React.FC = () => {
  return (
    <div className="chart-grid">
      <PieChart />
      <BarChart />
      <DoughnutChart />
      <GroupedBarChart />
    </div>
  );
};

export default SummaryCharts;



