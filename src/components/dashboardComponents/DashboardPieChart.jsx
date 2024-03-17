import { PieChart, Pie, Cell } from "recharts";
const DashboardPieChart = () => {
  const data = [
    { name: "Regular Users ", value: 300, color: "#0071E3" },
    { name: "Premium User", value: 300, color: "#1D1D1F" },
    { name: "Irregular Users", value: 500, color: "#E30000" },
  ];

  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px]  pb-[12px] pe-6">
      <p className="text-[18px] font-medium ps-6 ">Income Ratio</p>
      <div className="ps-6 mt-[8px] mb-[18px]">
        <h1 className="text-[24px] font-medium">
          Current Week 17 Dec - 23 Dec
        </h1>
        <p className="text-[#686869] font-medium text-[18px]">in last 7 days</p>
      </div>
      <div className="flex justify-center">
        <PieChart width={228} height={232}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            //   outerRadius={10}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[28px] h-[28px] bg-blue500 "></div>
          <h1 className="text-[18px] text-black500 font-medium">
            Regular User (40%)
          </h1>
        </div>
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[28px] h-[28px] bg-black500 "></div>
          <h1 className="text-[18px] text-black500 font-medium">
            Premium User (50%)
          </h1>
        </div>
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[28px] h-[28px] bg-[#E30000] "></div>
          <h1 className="text-[18px] text-black500 font-medium">
            Premium Plus User (10%)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPieChart;
