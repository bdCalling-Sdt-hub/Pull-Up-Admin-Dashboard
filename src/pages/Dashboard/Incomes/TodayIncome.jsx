import { FaEye } from "react-icons/fa";
import Table from "../../../components/UI/Table.jsx";
import { useState } from "react";
import TableHeader from "./components/tableHeader.jsx";
import dollar from '../../../assets/Credit_Card_01.png'
import CustomDrawerIncome from "../../../components/UI/CustomDrawerIncome.jsx";

const TodayIncome = () => {

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
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "2",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "3",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "4",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "5",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "6",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "7",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "8",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "9",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
        {
            key: "10",
            trxid: "#123456789",
            timedate: "Time & Date",
            amount: "$50"
        },
    ];

    const columns = [
        {
            title: <p className="text-[#D0A65A]">Trx ID</p>,
            dataIndex: "trxid",
        },
        {
            title: <p className="text-[#D0A65A]">Time & Date</p>,
            dataIndex: "timedate",
        },
        {
            title: <p className="text-[#D0A65A]">Amount</p>,
            dataIndex: "amount",
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

    return (
        <div>
            <CustomDrawerIncome open={open} setOpen={setOpen} data={drawerData}></CustomDrawerIncome>
            <div><TableHeader title={"Income"} icon={dollar} property1='Today' property2='Total Income' data1='$ 550' data2='$ 22,500' /></div>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default TodayIncome;