import { FaEye } from "react-icons/fa";
import Table from "../../../components/UI/Table.jsx";
import { useState } from "react";
import CustomDrawer from "../../../components/UI/CustomDrawer.jsx";
import { Col } from "antd";
import { FaUserGroup } from "react-icons/fa6";
import business from '../../../assets/business.png'
import shopping from '../../../assets/shopping.png'
import organization from '../../../assets/organization.png'
import { useAllUsersQuery } from "../../../Redux/api/dashboardApi.js";

const FreeUsers = () => {

  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState();

  console.log(open)

  const handleOnCline = (usersMapData) => {
    setDrawerData(usersMapData)
    setOpen((prev) => !prev);
  }

  // const data = [
  //   {
  //     key: "1",
  //     sl: 1,
  //     userName: "Akash",
  //     accountType: "Business",
  //   },
  //   {
  //     key: "2",
  //     sl: 2,
  //     userName: "Mostain",
  //     accountType: "Organization",
  //   },
  //   {
  //     key: "3",
  //     sl: 3,
  //     userName: "Istiak",
  //     accountType: "Shopping",
  //   },
  //   {
  //     key: "4",
  //     sl: 4,
  //     userName: "Opu",
  //     accountType: "Shopping",
  //   },
  //   {
  //     key: "5",
  //     sl: 5,
  //     userName: "Sakib",
  //     accountType: "Business",
  //   },
  //   {
  //     key: "6",
  //     sl: 6,
  //     userName: "Naim",
  //     accountType: "Organization",
  //   },
  //   {
  //     key: "7",
  //     sl: 7,
  //     userName: "Naim",
  //     accountType: "Organization",
  //   },
  //   {
  //     key: "8",
  //     sl: 8,
  //     userName: "Naim",
  //     accountType: "Organization",
  //   },
  //   {
  //     key: "9",
  //     sl: 9,
  //     userName: "Naim",
  //     accountType: "Organization",
  //   },
  //   {
  //     key: "10",
  //     sl: 10,
  //     userName: "Naim",
  //     accountType: "Organization",
  //   },
  // ];

  const columns = [
    {
      title: <p className="text-blue500">#SL</p>,
      dataIndex: "index",
    },
    {
      title: <p className="text-blue500">User Name</p>,
      dataIndex: "name",
    },
    {
      title: <p className="text-blue500">Account Type</p>,
      dataIndex: "accountType",
      filters: [
        {
          text: 'Shopping',
          value: 'shopping',
        },
        {
          text: 'Organization',
          value: 'organisation',
        },
        {
          text: 'Business',
          value: 'business',
        },
      ],
      onFilter: (value, record) => record.accountType?.indexOf(value) === 0,
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

  const { data: allUserData } = useAllUsersQuery();
  console.log("Package Data", allUserData)

  const usersMapData = allUserData?.data?.result?.map((user, i) => {
    return {
      index: i + 1,
      name: user.name,
      accountType: user.accountType,
      email: user.email,
      image: user.image,
      averageRating: user.averageRating,
      phoneNumber: user.phoneNumber,
      packageDuration: user.packageDuration,
      businessDescription: user.businessDescription,
      businessEmail: user.businessEmail,
      businessHours: user.businessHours,
      businessName: user.businessName,
      businessNumber: user.businessNumber,
      businessWebsite: user.businessWebsite,
      organisationDescription: user.organisationDescription,
      organisationEmail: user.organisationEmail,
      organisationName: user.organisationName,
      organisationNumber: user.organisationNumber,
      organisationWebsite: user.organisationWebsite,
    }
  })

  // Filter the data to get only Business Account type
  const businessAccounts = allUserData?.data?.result?.filter(
    (user) => user?.accountType === 'business'
  );

  const organisationAccounts = allUserData?.data?.result?.filter(
    (user) => user?.accountType === 'organisation'
  );

  const shoppingAccounts = allUserData?.data?.result?.filter(
    (user) => user?.accountType === 'shopping'
  );

  // Get the length of Business Account type data
  const businessAccountsLength = businessAccounts ? businessAccounts.length : 0;
  const organisationAccountsLength = organisationAccounts ? organisationAccounts.length : 0;
  const shoppingAccountsLength = shoppingAccounts ? shoppingAccounts.length : 0;

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
                {allUserData?.data?.result.length}
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
                {organisationAccountsLength}
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
                {shoppingAccountsLength}
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
                {businessAccountsLength}
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
        <Table columns={columns} data={usersMapData} />
      </div>

    </div>
  );
};

export default FreeUsers;
