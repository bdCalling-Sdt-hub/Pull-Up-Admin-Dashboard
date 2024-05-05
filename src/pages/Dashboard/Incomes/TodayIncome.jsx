import { FaEye } from "react-icons/fa";
import Table from "../../../components/UI/Table.jsx";
import { useState } from "react";
import TableHeader from "./components/TableHeader.jsx";
import dollar from '../../../assets/Credit_Card_01.png'
import CustomDrawerIncome from "../../../components/UI/CustomDrawerIncome.jsx";
import { useTransactionsQuery } from "../../../Redux/api/dashboardApi.js";

const TodayIncome = () => {

    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState();

    console.log(open)

    const handleOnCline = (data) => {
        setDrawerData(data)
        setOpen((prev) => !prev);
    }

    const columns = [
        {
            title: <p className="text-[#D0A65A]">Trx ID</p>,
            dataIndex: "sl",
        },
        {
            title: <p className="text-[#D0A65A]">Time & Date</p>,
            dataIndex: "date",
        },
        {
            title: <p className="text-[#D0A65A]">Amount</p>,
            dataIndex: "payment",
        },
        {
            title: <p className="text-[#D0A65A]">Action</p>,
            dataIndex: "key",
            render: function (_, data) {
                return (
                    <div className="text-[#D0A65A]">
                        <FaEye onClick={() => handleOnCline(data)} />
                    </div>
                );
            },
        },
    ];

    const { data: transactionsData } = useTransactionsQuery()

    let totalIncome = 0;
    transactionsData?.data?.result.forEach(payment => {
        totalIncome += payment.paymentData.amount;
    });


    const today = new Date().toISOString().slice(0, 10);
    let todayIncome = 0;
    transactionsData?.data?.result.forEach(payment => {
        const paymentDate = payment.createdAt.slice(0, 10);
        if (paymentDate === today) {
            todayIncome += payment.paymentData.amount;
        }
    });


    const formatTransactions = (data) => {
        return {
            success: true,
            message: "All Transactions Successfully",
            data: {
                result: data?.data?.result?.map((transaction, index) => ({
                    // Include desired properties from the transaction object
                    sl: index + 1,
                    name: transaction?.userId?.name,
                    email: transaction?.userId?.email,
                    date: transaction?.createdAt?.split("T")[0],
                    payment: transaction?.paymentData?.amount,
                    trxId: transaction?.paymentData, // Assuming "packages" should be "package"
                    // You can add more properties here as needed
                })),
            },
        };
    };

    // Example usage
    const formattedData = formatTransactions(transactionsData);

    return (
        <div>
            <CustomDrawerIncome open={open} setOpen={setOpen} data={drawerData}></CustomDrawerIncome>
            <div><TableHeader title={"Income"} icon={dollar} property1='Today' property2='Total Income' data1={'$ ' + todayIncome} data2={"$ " + totalIncome} /></div>
            <Table columns={columns} data={formattedData?.data?.result} />
        </div>
    );
};

export default TodayIncome;