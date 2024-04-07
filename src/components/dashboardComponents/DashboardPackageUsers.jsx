import { Table } from "antd";
import { useAllUsersQuery } from "../../Redux/api/dashboardApi";


const DashboardPackageUsers = () => {

    const columns = [
        {
            title: '#SL',
            dataIndex: 'index',
            // filters: [
            //     {
            //         text: 'Joe',
            //         value: 'Joe',
            //     },
            //     {
            //         text: 'Jim',
            //         value: 'Jim',
            //     },
            //     {
            //         text: 'Submenu',
            //         value: 'Submenu',
            //         children: [
            //             {
            //                 text: 'Green',
            //                 value: 'Green',
            //             },
            //             {
            //                 text: 'Black',
            //                 value: 'Black',
            //             },
            //         ],
            //     },
            // ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            // onFilter: (value, record) => record.sl.indexOf(value) === 0,
            // sorter: (a, b) => a.sl.length - b.sl.length,
            // sortDirections: ['descend'],
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            // defaultSortOrder: 'descend',
            // sorter: (a, b) => a.userName - b.userName,
        },
        {
            title: 'Packages',
            dataIndex: 'packageDuration',
            filters: [
                {
                    text: 'Weekly',
                    value: 'weekly',
                },
                {
                    text: 'Monthly',
                    value: 'monthly',
                },
            ],
            onFilter: (value, record) => record.packageDuration.indexOf(value) === 0,
        },
    ];

    const { data: allUserData } = useAllUsersQuery();
    console.log("Package Data", allUserData)

    const packageDurationData = allUserData?.data?.result?.filter(
        (user) => user?.packageDuration === 'monthly' || user?.packageDuration === 'weekly'
    );

    const packageMapData = packageDurationData?.map((user, i) => {
        return {
            index: i + 1,
            name: user.name,
            packageDuration: user.packageDuration
        }
    })

    const packageDurationMonth = allUserData?.data?.result?.filter(
        (user) => user?.packageDuration === 'monthly'
    );

    const packageDurationWeekly = allUserData?.data?.result?.filter(
        (user) => user?.packageDuration === 'weekly'
    );

    const packageDurationMonthLength = packageDurationMonth ? packageDurationMonth.length : 0;
    const packageDurationWeeklyLength = packageDurationWeekly ? packageDurationWeekly.length : 0;

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className="mt-4 mr-4">
            <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[2px] pb-[12px] pe-6">
                {/* <p className="text-[18px] font-medium ps-6">Income Ratio</p> */}
                <div className="flex flex-row items-center justify-between ps-6 mt-[4px] mb-[8px]">
                    <h1 className="text-[28px] font-medium">
                        Package Users List
                    </h1>
                    <div className="flex flex-row justify-items-center items-center bg-white p-2 rounded">
                        <p className="text-black500 text-[16px] font-semibold">
                            {packageDurationWeeklyLength}
                        </p>
                        <p className="text-[16px] text-[#454545] font-light ml-2">
                            Weekly users
                        </p>
                    </div>
                    <div className="flex flex-row justify-items-center items-center bg-white p-2 rounded">
                        <p className="text-black500 text-[16px] font-semibold">
                            {packageDurationMonthLength}
                        </p>
                        <p className="text-[16px] text-[#454545] font-light ml-2">
                            Monthly users
                        </p>
                    </div>
                </div>

                <Table columns={columns} dataSource={packageMapData} onChange={onChange} />

            </div>
        </div>
    );
};

export default DashboardPackageUsers;