import React from 'react';
import BarChart from 'components/Charts/HorizontalBarChart01.js';
import { tailwindConfig } from 'utils/utils';

function HorizontalBarChart() {
  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Data #1',
        data: [265],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Data #2',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Data #3',
        data: [125],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Data #4',
        data: [41],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },

      {
        label: 'Data #5',
        data: [20],
        backgroundColor: tailwindConfig().theme.colors.slate[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-6">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Horizontal Bar Chart #1</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800">516</div>
          <div className="rounded-full bg-green-500 px-1.5 text-sm font-semibold text-white">+32%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default HorizontalBarChart;
