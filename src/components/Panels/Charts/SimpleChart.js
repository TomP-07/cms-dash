import LineChart from "components/Charts/LineChart"

const SimpleChart = ({chartData, className, children}) => {
    return (
        <div className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 ${className}`}>
          <div className="px-5 pt-5">
            {children}
            
          </div>
          <div className="grow">
            <LineChart data={chartData} width={389} height={190} />
          </div>
        </div>
      );
}

export default SimpleChart;