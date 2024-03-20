import { FaEye } from "react-icons/fa";
import Table from "../../../components/UI/Table.jsx";
import { useState } from "react";
import CustomDrawer from "../../../components/UI/CustomDrawer.jsx";
import TableHeader from "./components/tableHeader.jsx";
import users from '../../../assets/site-bar-icon/users.png'
import { Col } from "antd";
import { FaUserGroup } from "react-icons/fa6";
import business from '../../../assets/business.png'
import shopping from '../../../assets/shopping.png'
import organization from '../../../assets/organization.png'

const FreeUsers = () => {

  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState();

  console.log(open)

  const handleOnCline = (data) => {
    setDrawerData(data)
    setOpen((prev) => !prev);
  }

  const data = [
    {
      key: "1",
      sl: 1,
      userName: "Akash",
      accountType: "Business",
    },
    {
      key: "2",
      sl: 2,
      userName: "Mostain",
      accountType: "Organization",
    },
    {
      key: "3",
      sl: 3,
      userName: "Istiak",
      accountType: "Shopping",
    },
    {
      key: "4",
      sl: 4,
      userName: "Opu",
      accountType: "Shopping",
    },
    {
      key: "5",
      sl: 5,
      userName: "Sakib",
      accountType: "Business",
    },
    {
      key: "6",
      sl: 6,
      userName: "Naim",
      accountType: "Organization",
    },
    {
      key: "7",
      sl: 7,
      userName: "Naim",
      accountType: "Organization",
    },
    {
      key: "8",
      sl: 8,
      userName: "Naim",
      accountType: "Organization",
    },
    {
      key: "9",
      sl: 9,
      userName: "Naim",
      accountType: "Organization",
    },
    {
      key: "10",
      sl: 10,
      userName: "Naim",
      accountType: "Organization",
    },
  ];

  const columns = [
    {
      title: <p className="text-blue500">#SL</p>,
      dataIndex: "sl",
    },
    {
      title: <p className="text-blue500">User Name</p>,
      dataIndex: "userName",
    },
    {
      title: <p className="text-blue500">Account Type</p>,
      dataIndex: "accountType",
      filters: [
        {
          text: 'Shopping',
          value: 'Shopping',
        },
        {
          text: 'Organization',
          value: 'Organization',
        },
        {
          text: 'Business',
          value: 'Business',
        },
      ],
      onFilter: (value, record) => record.accountType.indexOf(value) === 0,
    },
    {
      title: <p className="text-blue500">User Status</p>,
      dataIndex: "key",
      render: function (_, data) {
        return (
          <div className="text-blue500">
            <FaEye onClick={() => handleOnCline(data)} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex flex-row gap-4 mx-16">
        <Col>
          <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
            <div className="pr-6">
              <FaUserGroup size={60} />
            </div>
            <div>
              <p className="text-black500 text-[20px] font-semibold">
                780
              </p>
              <p className="text-[20px] text-[#454545] font-light">
                Total Account
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
            <div className="pr-6">
              <img src={organization}></img>
            </div>
            <div>
              <p className="text-black500 text-[20px] font-semibold">
                780
              </p>
              <p className="text-[19px] text-[#454545] font-light">
                Organization Account
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
            <div className="pr-6">
              <img src={shopping}></img>
            </div>
            <div>
              <p className="text-black500 text-[20px] font-semibold">
                780
              </p>
              <p className="text-[20px] text-[#454545] font-light">
                Shopping Account
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="flex justify-center items-center border-r-2 p-[12px] bg-white rounded">
            <div className="pr-6">
              <img src={business}></img>
            </div>
            <div>
              <p className="text-black500 text-[20px] font-semibold">
                780
              </p>
              <p className="text-[20px] text-[#454545] font-light">
                Business Account
              </p>
            </div>
          </div>
        </Col>
      </div>
      <CustomDrawer open={open} setOpen={setOpen} data={drawerData}></CustomDrawer>
      {/* <div><TableHeader title={"Users"} icon={users} property1='Free Users ' property2='Total Users' data1='500' data2='1,234' /></div> */}
      <div className="mt-4 mx-16">
        <Table columns={columns} data={data} />
      </div>

    </div>
  );
};

export default FreeUsers;
