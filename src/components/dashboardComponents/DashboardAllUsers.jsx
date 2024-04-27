import { Table, Tabs } from "antd";
import { useTransactionsQuery } from "../../Redux/api/dashboardApi";
import { useState } from "react";


const DashboardAllUsers = () => {


    const [activeTab, setActiveTab] = useState('shopping');

    console.log(activeTab)

    const columns = [
        {
            title: '#SL',
            dataIndex: 'sl',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
        },
    ];

    const { data: transactionsData } = useTransactionsQuery({ userAccountType: activeTab })

    const formatTransactions = (data) => {
        return {
            success: true,
            message: "All Transactions Successfully",
            data: {
                result: data?.data?.result?.map((transaction, index) => ({
                    // Include desired properties from the transaction object
                    sl: index + 1,
                    name: transaction?.userId?.name,
                    date: transaction?.createdAt?.split("T")[0],
                    payment: transaction?.paymentData?.amount,
                    package: transaction.packages, // Assuming "packages" should be "package"
                    // You can add more properties here as needed
                })),
            },
        };
    };

    // Example usage
    const formattedData = formatTransactions(transactionsData);


    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const items = [
        {
            key: 'shopping',
            label: 'Shopping',
            children: <Table columns={columns} dataSource={formattedData?.data?.result} onChange={onChange} />,
        },
        {
            key: 'business',
            label: 'Business',
            children: <Table columns={columns} dataSource={formattedData?.data?.result} onChange={onChange} />,
        },
        {
            key: 'organization',
            label: 'Organization',
            children: <Table columns={columns} dataSource={formattedData?.data?.result} onChange={onChange} />,
        },
    ];


    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="mr-4">
            <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
                <Tabs size="large" onChange={handleTabChange} items={items} defaultActiveKey="Shopping">
                </Tabs>
            </div>
        </div>
    );
};

export default DashboardAllUsers;