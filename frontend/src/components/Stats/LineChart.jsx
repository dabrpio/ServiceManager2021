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

const options = {
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
      text: 'Przychody',
    },
  },
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Przychody roczne',
      data: labels.map(() => getRandomInt(0, 1000)),
      borderColor: '#3f51b5',
      backgroundColor: '#3f51b5',
    },
  ],
};

const LineChart = () => <Line options={options} data={data} />;

export default LineChart;
