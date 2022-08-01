import React, { useRef, useEffect, useCallback } from 'react';

import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip } from 'chart.js';
import 'chartjs-adapter-moment';

import { tailwindConfig, formatValue } from 'utils/utils';

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

function RealTimeChart({ data, width, height }) {
  const canvas = useRef(null);
  const chartValue = useRef(null);
  const chartDeviation = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              callback: value => formatValue(value),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'second',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'H:mm:ss',
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleFont: {
              weight: '600',
            },
            callbacks: {
              label: context => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: false,
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, canvas]);

  // Update header values
  useEffect(() => {
    const currentValue = data.datasets[0].data[data.datasets[0].data.length - 1];
    const previousValue = data.datasets[0].data[data.datasets[0].data.length - 2];
    const diff = ((currentValue - previousValue) / previousValue) * 100;
    chartValue.current.innerHTML = data.datasets[0].data[data.datasets[0].data.length - 1];
    if (diff < 0) {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.yellow[500];
    } else {
      chartDeviation.current.style.backgroundColor = tailwindConfig().theme.colors.green[500];
    }
    chartDeviation.current.innerHTML = `${diff > 0 ? '+' : ''}${diff.toFixed(2)}%`;
  }, [data]);

  return (
    <>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold tabular-nums text-slate-800">
            $<span ref={chartValue}>57.81</span>
          </div>
          <div ref={chartDeviation} className="rounded-full px-1.5 text-sm font-semibold text-white"></div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} data={data} width={width} height={height}></canvas>
      </div>
    </>
  );
}

export default RealTimeChart;
