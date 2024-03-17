import { Table } from "antd";


const DashboardPackageUsers = () => {

    const columns = [
        {
            title: '#SL',
            dataIndex: 'sl',
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
            dataIndex: 'userName',
            // defaultSortOrder: 'descend',
            // sorter: (a, b) => a.userName - b.userName,
        },
        {
            title: 'Packages',
            dataIndex: 'packages',
            filters: [
                {
                    text: 'Weekly',
                    value: 'Weekly',
                },
                {
                    text: 'Monthly',
                    value: 'Monthly',
                },
            ],
            onFilter: (value, record) => record.packages.indexOf(value) === 0,
        },
    ];
    const data = [
        {
            key: '1',
            sl: '01',
            userName: 'Benjamin Price',
            packages: 'Weekly',
        },
        {
            key: '2',
            sl: '02',
            userName: 'Benjamin Price',
            packages: 'Monthly',
        },
        {
            key: '3',
            sl: '03',
            userName: 'Benjamin Price',
            packages: 'Weekly',
        },
        // {
        //     key: '4',
        //     sl: '04',
        //     userName: 'Benjamin Price',
        //     packages: 'Monthly',
        // },
    ];

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
                            531
                        </p>
                        <p className="text-[16px] text-[#454545] font-light ml-2">
                            Weekly users
                        </p>
                    </div>
                    <div className="flex flex-row justify-items-center items-center bg-white p-2 rounded">
                        <p className="text-black500 text-[16px] font-semibold">
                            780
                        </p>
                        <p className="text-[16px] text-[#454545] font-light ml-2">
                            Monthly users
                        </p>
                    </div>
                </div>

                <Table columns={columns} dataSource={data} onChange={onChange} />

            </div>
        </div>
    );
};

export default DashboardPackageUsers;