import { Table } from "antd";
import { useTransactionsQuery } from "../../../Redux/api/dashboardApi";


const TransactionHistory = () => {

    const columns = [
        {
            title: '#Trx ID',
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

    const { data: transactionsData } = useTransactionsQuery()

    const formatTransactions = (data) => {
        console.log("object: ", data)
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

    return (
        <div className="mr-4">
            <div className="bg-[#FAF6EF] rounded-lg px-[20px] pt-[8px] pb-[12px] pe-6">
                <p className="text-2xl font-medium leading-relaxed text-center my-4">Transaction Activities</p>


                <Table columns={columns} dataSource={formattedData?.data?.result} onChange={onChange} />

            </div>
        </div>
    );
};

export default TransactionHistory;