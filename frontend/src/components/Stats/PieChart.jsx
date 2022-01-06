import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Apple', 'Samsung', 'Xiaomi', 'Nokia', 'Inne'],

  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      font: {
        size: '16px',
        family: "'Roboto', sans-serif",
        weight: 700,
      },
      color: '#3f51b5',
      text: 'Najczęściej naprawiane urządzenia',
    },
  },
};

const PieChart = () => (
  <Pie data={data} options={options} width={10} height={5} />
);

export default PieChart;
