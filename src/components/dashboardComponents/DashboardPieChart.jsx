import { DatePicker } from "antd";
import { PieChart, Pie, Cell } from "recharts";
import { usePackagePurchaseRatioQuery } from "../../Redux/api/dashboardApi";
import dayjs from "dayjs";
import { useState } from "react";

const DashboardPieChart = () => {


  const [selectedYear, setselectedYear] = useState(dayjs().year())
  const [selectedMonth, setselectedMonth] = useState(dayjs().month() + 1)

  const { data: incomeRatio } = usePackagePurchaseRatioQuery({ year: selectedYear, month: selectedMonth })
  // console.log("--------", incomeRatio)

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setselectedYear(dateString.split("-")[0])
    setselectedMonth(dateString.split("-")[1])
  };

  return (
    <div className="bg-white rounded-lg px-[20px] pt-[16px]  pb-[12px] pe-6">

      <div className="flex justify-between items-center ps-6 mt-[8px] mb-[18px]">
        <p className="text-xl font-bold">Package Purchase Ratio</p>
        <DatePicker onChange={onChange} defaultValue={dayjs(dayjs(), "YYYY-MM")} format={"YYYY-MM"} picker="month" />
      </div>

      <div className="flex justify-center">
        <PieChart width={228} height={232}>
          <Pie
            data={incomeRatio?.data?.formattedData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            //   outerRadius={10}
            label
          >
            {incomeRatio?.data?.formattedData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-row gap-y-2 mt-10">
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[14px] h-[14px] bg-[#D0A65A] rounded-lg"></div>
          <h1 className="text-[14px] text-black500 font-medium">
            Monthly  ({incomeRatio?.data?.monthlyPercent} %)
          </h1>
        </div>
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[14px] h-[14px] bg-[#68532D] rounded-lg"></div>
          <h1 className="text-[14px] text-[#68532D] font-medium">
            Weekly ({incomeRatio?.data?.weeklyPercent} %)
          </h1>
        </div>
        <div className="flex items-center gap-x-4 ps-6">
          <div className="w-[14px] h-[14px] bg-black500 rounded-lg"></div>
          <h1 className="text-[14px] text-black500 font-medium">
            Daily ({incomeRatio?.data?.dailyDataPercent} %)
          </h1>
        </div>

      </div>
    </div>
  );
};

export default DashboardPieChart;
