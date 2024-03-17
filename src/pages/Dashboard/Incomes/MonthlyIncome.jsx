import { FaEye } from "react-icons/fa";
import Table from "../../../components/UI/Table.jsx";
import { useState } from "react";
import TableHeader from "./components/tableHeader.jsx";
import dollar from '../../../assets/currency-dollar.png'
import CustomDrawerIncome from "../../../components/UI/CustomDrawerIncome.jsx";

const MonthlyIncome = () => {

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
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
        {
            key: "2",
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
        {
            key: "3",
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
        {
            key: "4",
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
        {
            key: "5",
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
        {
            key: "6",
            months: "January, 2023",
            totalUsers: "05",
            amount: "$50"
        },
    ];

    const columns = [
        {
            title: <p className="text-blue500">Months</p>,
            dataIndex: "months",
        },
        {
            title: <p className="text-blue500">Total Users</p>,
            dataIndex: "totalUsers",
        },
        {
            title: <p className="text-blue500">Amount</p>,
            dataIndex: "amount",
        },
        {
            title: <p className="text-blue500">Action</p>,
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
            <CustomDrawerIncome open={open} setOpen={setOpen} data={drawerData}></CustomDrawerIncome>
            <div><TableHeader title={"Income"} icon={dollar} property1='Monthly ' property2='Total Income' data1='$ 550' data2='$ 22,500' /></div>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default MonthlyIncome;