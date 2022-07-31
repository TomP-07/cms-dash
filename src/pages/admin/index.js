import Layout from "components/Layout";
import SimpleChart from "components/Panels/Charts/SimpleChart"
import BarChart01 from "components/Panels/Charts/BarChart01"
import RealTimeChart from "components/Panels/Charts/RealTimeChart"
import DoughnutChart01 from "components/Panels/Charts/DoughnutChart01"
import TableList from "components/Panels/TableList"
import TimeList from "components/Panels/TimeList"
import HorizontalBarChart from "components/Panels/Charts/HorizontalBarChart"
import { tailwindConfig, hexToRGB } from "utils/utils.js";





const AdminHome = (props) => {
  return (
    <Layout type={"admin"} data={props.data}>
      <div className="py-8 mt-4 flex justify-end items-center mr-12">
        <span className="text-right font-bold text-3xl">Welcome Tomás</span>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-20">
        <SimpleChart className="" chartData={simpleChartData_1}>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Simple Chart #1</h2>
          <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Profits</div>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">$18,642</div>
            <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+22%</div>
          </div>
        </SimpleChart>
        <SimpleChart className="" chartData={simpleChartData_3}>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">Simple Chart #2</h2>
          <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Costs</div>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">$1,342</div>
            <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-17%</div>
          </div>
        </SimpleChart>
        <DoughnutChart01>
        </DoughnutChart01>
        <HorizontalBarChart>

        </HorizontalBarChart>
        <BarChart01>

        </BarChart01>
        <RealTimeChart>

        </RealTimeChart>
        <TimeList>
        </TimeList>
        <TableList>
        </TableList>
      </div>
    </Layout>
  );
};

import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const navDataPath = path.join(
    process.cwd(),
    "/src/components/AdminNavigation/exampleNav.json"
  );
  const jsonData = await fsPromises.readFile(navDataPath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      data: data,
    },
  };
}

export default AdminHome;

const simpleChartData_1 = {
  labels: [
    '12-01-2020', '01-01-2021', '02-01-2021',
    '03-01-2021', '04-01-2021', '05-01-2021',
    '06-01-2021', '07-01-2021', '08-01-2021',
    '09-01-2021', '10-01-2021', '11-01-2021',
    '12-01-2021', '01-01-2022', '02-01-2022',
    '03-01-2022', '04-01-2022', '05-01-2022',
    '06-01-2022', '07-01-2022', '08-01-2022',
    '09-01-2022', '10-01-2022', '11-01-2022',
    '12-01-2022', '01-01-2023',
  ],
  datasets: [
    // Indigo line
    {
      data: [
        732, 610, 610, 504, 504, 504, 349,
        349, 504, 342, 504, 610, 391, 192,
        154, 273, 191, 191, 126, 263, 349,
        252, 423, 622, 470, 532,
      ],
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

    // Gray line
    {
      data: [
        532, 532, 532, 404, 404, 314, 314,
        314, 314, 314, 234, 314, 234, 234,
        314, 314, 314, 388, 314, 202, 202,
        202, 202, 314, 720, 642,
      ],
      borderColor: tailwindConfig().theme.colors.slate[300],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
      clip: 20,
    },
  ],
};

const simpleChartData_2 = {
  datasets: [
    // Indigo line
    {
      data: [
        540, 466, 540, 466, 385, 432, 334,
        334, 289, 289, 200, 289, 222, 289,
        289, 403, 554, 304, 289, 270, 134,
        270, 829, 344, 388, 364,
      ],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
      borderColor: tailwindConfig().theme.colors.indigo[500],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      clip: 20,
    },
    // Gray line
    {
      data: [
        689, 562, 477, 477, 477, 477, 458,
        314, 430, 378, 430, 498, 642, 350,
        145, 145, 354, 260, 188, 188, 300,
        300, 282, 364, 660, 554,
      ],
      borderColor: tailwindConfig().theme.colors.slate[300],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
      clip: 20,
    },
  ],
};

const simpleChartData_3 = {
  labels: [
    '12-01-2020', '01-01-2021', '02-01-2021',
    '03-01-2021', '04-01-2021', '05-01-2021',
    '06-01-2021', '07-01-2021', '08-01-2021',
    '09-01-2021', '10-01-2021', '11-01-2021',
    '12-01-2021', '01-01-2022', '02-01-2022',
    '03-01-2022', '04-01-2022', '05-01-2022',
    '06-01-2022', '07-01-2022', '08-01-2022',
    '09-01-2022', '10-01-2022', '11-01-2022',
    '12-01-2022', '01-01-2023',
  ],
  datasets: [
    // Indigo line
    {
      data: [
        622, 622, 426, 471, 365, 365, 238,
        324, 288, 206, 324, 324, 500, 409,
        409, 273, 232, 273, 500, 570, 767,
        808, 685, 767, 685, 685,
      ],
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
    // Gray line
    {
      data: [
        732, 610, 610, 504, 504, 504, 349,
        349, 504, 342, 504, 610, 391, 192,
        154, 273, 191, 191, 126, 263, 349,
        252, 423, 622, 470, 532,
      ],
      borderColor: tailwindConfig().theme.colors.slate[300],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
      clip: 20,
    },
  ],
};
