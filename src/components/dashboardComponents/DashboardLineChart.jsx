import { DatePicker } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  //   ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { useState } from "react";
import { useIncomeRatioQuery } from "../../Redux/api/dashboardApi";





const DashboardLineChart = () => {

  const [selectedYear, setselectedYear] = useState(dayjs().year())

  const { data: incomeRatio } = useIncomeRatioQuery({ year: selectedYear })

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setselectedYear(dateString.split("-")[0])
  };

  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px] pb-[12px] pe-6 ">
      <div className="flex justify-between items-center ps-6 mt-[8px] mb-[18px]">
        <p className="text-xl font-bold">Total  Income Ratio</p>
        <div className="flex gap-x-4 ps-6 items-center">
          <div className="w-[14px] h-[14px] bg-[#D0A65A] rounded-lg"></div>
          <h1 className="text-[18px] font-medium text-black500">
            Monthly
          </h1>
        </div>
        <div className="flex gap-x-4 ps-6 items-center">
          <div className="w-[14px] h-[14px] bg-[#795b27] rounded-lg"></div>
          <h1 className="text-[18px] font-medium text-[#795b27]">
            Weekly
          </h1>
        </div>
        <div className="flex gap-x-4 ps-6 items-center">
          <div className="w-[14px] h-[14px] bg-black500 rounded-lg"></div>
          <h1 className="text-[18px] font-medium text-black500">
            Daily
          </h1>
        </div>
        <DatePicker onChange={onChange} defaultValue={dayjs(dayjs(), "YYYY")} format={"YYYY"} picker="year" />
      </div>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={1000}
        height={280}
        data={incomeRatio?.data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} stroke="#54A0EC" />
        <XAxis dataKey="month" stroke="black" />
        <YAxis dataKey="monthly" stroke="black" />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="monthly"
          stroke="#D0A65A"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="weekly"
          stroke="#795b27"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="daily"
          stroke="black"
          activeDot={{ r: 8 }}
        />

      </LineChart>
      {/* </ResponsiveContainer> */}

    </div>
  );
};

export default DashboardLineChart;
