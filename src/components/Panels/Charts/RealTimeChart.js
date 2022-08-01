import React, { useState, useEffect } from 'react';
import RealtimeChart from 'components/Charts/RealTimeChart01.js';

// Import utilities
import { tailwindConfig, hexToRGB } from 'utils/utils';

function RealTimeChart({ className }) {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);

  // Dummy data to be looped
  const data = [
    127.81, 127.75, 125.48, 124.28, 123.14, 122.25, 121.04, 122.49, 125.49, 126.87, 123.73, 126.42, 125.06, 125.62,
    128.16, 125.22, 128.67, 130.18, 131.31, 133.25, 135.91, 134.44, 135.97, 132.27, 130.96, 129.34, 125.07, 129.85,
    123.79, 121.92, 120.95, 119.65, 118.09, 119.81, 117.85, 119.52, 120.21, 122.22, 124.42, 123.42, 120.91, 128.52,
    123.37, 127.58, 129.09, 129.36, 128.71, 129.42, 125.93, 127.71, 120.62, 126.28, 127.37, 123.08, 125.94, 125.82,
    123.94, 122.65, 120.25,
  ];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [...slicedData, data[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.22)`,
        borderColor: tailwindConfig().theme.colors.indigo[600],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        clip: 20,
      },
    ],
  };

  return (
    <div
      className={`col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 ${className}`}>
      <header className="flex items-center border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Real Time Chart #1</h2>
      </header>
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default RealTimeChart;
