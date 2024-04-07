import { Dropdown, Space } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Rectangle,

  //   ResponsiveContainer,
} from "recharts";
import { DownOutlined } from '@ant-design/icons';
import { useUserStatisticsQuery } from "../../Redux/api/dashboardApi";

const data = [
  {
    name: '01',
    Shopping: 4000,
    Business: 2400,
    Organization: 2400,
    amt: 2400,
  },
  {
    name: '02',
    Shopping: 3000,
    Business: 1398,
    Organization: 1398,
    amt: 2210,
  },
  {
    name: '03',
    Shopping: 2000,
    Business: 6800,
    Organization: 9500,
    amt: 2290,
  },
  {
    name: '04',
    Shopping: 2780,
    Business: 3908,
    Organization: 6908,
    amt: 2000,
  },
  {
    name: '05',
    Shopping: 1890,
    Business: 4800,
    Organization: 3800,
    amt: 2181,
  },
  {
    name: '06',
    Shopping: 2390,
    Business: 3800,
    Organization: 3600,
    amt: 2500,
  },
  {
    name: '07',
    Shopping: 3490,
    Business: 4300,
    Organization: 3300,
    amt: 2100,
  },
  {
    name: '08',
    Shopping: 4000,
    Business: 2400,
    Organization: 2400,
    amt: 2400,
  },
  {
    name: '09',
    Shopping: 3000,
    Business: 1398,
    Organization: 1398,
    amt: 2210,
  },
  {
    name: '10',
    Shopping: 2000,
    Business: 6800,
    Organization: 9500,
    amt: 2290,
  },
  {
    name: '11',
    Shopping: 2780,
    Business: 3908,
    Organization: 6908,
    amt: 2000,
  },
  {
    name: '12',
    Shopping: 1890,
    Business: 4800,
    Organization: 3800,
    amt: 2181,
  },
  {
    name: '13',
    Shopping: 2390,
    Business: 3800,
    Organization: 3600,
    amt: 2500,
  },
  {
    name: '14',
    Shopping: 3490,
    Business: 4300,
    Organization: 3300,
    amt: 2100,
  },
];

const items = [
  {
    label: <a href="#">January, 2024</a>,
    key: '0',
  },
  {
    label: <a href="#">February, 2024</a>,
    key: '1',
  },
  {
    label: 'March, 2024',
    key: '2',
  },
];

const DashboardBarChart = () => {

  const { data: allUserData } = useUserStatisticsQuery();
  console.log("AllData", allUserData)

  return (
    <div className="mt-4 mr-4">
      <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
        {/* <p className="text-[18px] font-medium ps-6">Income Ratio</p> */}
        <div className="flex flex-row items-center justify-between ps-6 mt-[4px] mb-[12px]">
          <h1 className="text-[32px] font-medium">
            Users Statistics
          </h1>
          {/* <p className="text-[#686869] font-medium text-[18px]">in last 7 days</p> */}
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Month, Year
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={980}
          height={250}
          data={data}
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
          <Bar dataKey="Shopping" fill="#D0A65A" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Business" fill="#454545" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="Organization" fill="#D07E2B" activeBar={<Rectangle fill="blue" stroke="purple" />} />
        </BarChart>
        {/* </ResponsiveContainer> */}

      </div>
    </div>
  );
};

export default DashboardBarChart;
