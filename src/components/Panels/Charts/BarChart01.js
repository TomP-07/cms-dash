import React from 'react';
import BarChart from 'components/Charts/BarChart01.js';

import { tailwindConfig } from 'utils/utils';

function BarChart01({ className }) {
  const chartData = {
    labels: ['12-01-2021', '01-01-2022', '02-01-2022', '03-01-2022', '04-01-2022', '05-01-2022'],
    datasets: [
      // Light blue bars
      {
        label: 'Data #1',
        data: [12000, 16000, 19000, 13000, 49500, 37000],
        backgroundColor: tailwindConfig().theme.colors.blue[600],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[700],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Green bars
      {
        label: 'Data #2',
        data: [32000, 46000, 32000, 68000, 92000, 98000],
        backgroundColor: tailwindConfig().theme.colors.green[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div
      className={`col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 ${className}`}>
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Vertical Bar Chart #1</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={290} />
    </div>
  );
}

export default BarChart01;
