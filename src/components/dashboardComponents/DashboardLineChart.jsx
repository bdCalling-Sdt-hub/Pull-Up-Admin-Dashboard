import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  //   ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    income: 3000,
  },
  {
    day: "Tue",
    income: 2000,
  },
  {
    day: "Wed",
    income: 2780,
  },
  {
    day: "Thu",
    income: 1890,
  },
  {
    day: "Fri",
    income: 2390,
  },
  {
    day: "Sat",
    income: 3490,
  },
  {
    day: "Sun",
    income: 4000,
  },
];

const DashboardLineChart = () => {
  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px] pb-[12px] pe-6 ">
      <p className="text-[18px] font-medium ps-6">Income Ratio</p>
      <div className="ps-6 mt-[8px] mb-[18px]">
        <h1 className="text-[24px] font-medium">
          Current Week 17 Dec - 23 Dec
        </h1>
        <p className="text-[#686869] font-medium text-[18px]">in last 7 days</p>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={800}
        height={280}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 " vertical={false} stroke="#54A0EC" />
        <XAxis dataKey="day" stroke="#54A0EC" />
        <YAxis dataKey="income" stroke="#54A0EC" />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="income"
          stroke="#54A0EC"
          activeDot={{ r: 8 }}
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
      <div className="flex gap-x-4 ps-6 mt-[24px]">
        <div className="w-[28px] h-[28px] bg-blue500 "></div>
        <h1 className="text-[18px] font-medium text-black500">
          Income line chart
        </h1>
      </div>
    </div>
  );
};

export default DashboardLineChart;
