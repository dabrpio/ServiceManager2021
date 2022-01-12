import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const createOtions = (title) => ({
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    labels: {
      display: false,
    },
    title: {
      display: true,
      font: {
        size: '16px',
        family: "'Roboto', sans-serif",
        weight: 700,
      },
      color: '#3f51b5',
      text: title,
    },
  },
});

export const createData = (data, label) => {
  return {
    labels: [...data].reverse().map((e) => e.month),
    datasets: [
      {
        label: label,
        data: [...data].reverse().map((e) => e.value),
        borderColor: '#3f51b5',
        backgroundColor: '#3f51b5',
      },
    ],
  };
};

const LineChart = ({ data, label, title }) => (
  <Line options={createOtions(title)} data={createData(data, label)} />
);

export default LineChart;
