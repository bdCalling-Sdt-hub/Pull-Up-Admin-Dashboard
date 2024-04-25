import { DatePicker } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Rectangle,
} from "recharts";
import { useUserStatisticsQuery } from "../../Redux/api/dashboardApi";
import { useState } from "react";
import dayjs from "dayjs";


const DashboardBarChart = () => {
  const [selectedYear, setselectedYear] = useState(dayjs().year())
  const [selectedMonth, setselectedMonth] = useState(dayjs().month() + 1)
  const { data: allUserData } = useUserStatisticsQuery({ year: selectedYear, month: selectedMonth });
  const myData = allUserData?.data;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setselectedYear(dateString.split("-")[0])
    setselectedMonth(dateString.split("-")[1])
  };

  return (
    <div className="mt-4 mr-4">
      <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
        {/* <p className="text-[18px] font-medium ps-6">Income Ratio</p> */}
        <div className="flex flex-row items-center justify-between ps-6 mt-[4px] mb-[12px]">
          <h1 className="text-[32px] font-medium">
            Users Statistics
          </h1>
          {/* <p className="text-[#686869] font-medium text-[18px]">in last 7 days</p> */}
          <DatePicker onChange={onChange} defaultValue={dayjs(dayjs(), "YYYY-MM")} format={"YYYY-MM"} picker="month" />
        </div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={980}
          height={250}
          data={myData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="shopping" fill="#D0A65A" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="business" fill="#454545" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="organisation" fill="#D07E2B" activeBar={<Rectangle fill="blue" stroke="purple" />} />
        </BarChart>
        {/* </ResponsiveContainer> */}

      </div>
    </div>
  );
};

export default DashboardBarChart;
