import Table from "../../../components/UI/Table.jsx";
import TableHeader from "./components/tableHeader.jsx";
import users from '../../../assets/site-bar-icon/users.png'
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import CustomDrawer from "../../../components/UI/CustomDrawer.jsx";

const PremiumPlusUsers = () => {
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
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
        {
            key: "2",
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
        {
            key: "3",
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
        {
            key: "4",
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
        {
            key: "5",
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
        {
            key: "6",
            name: "Jhon Doe",
            email: "jhondoe@gmail.com",
            number: "2746478994",
        },
    ];

    const columns = [
        {
            title: <p className="text-blue500">Name</p>,
            dataIndex: "name",
        },
        {
            title: <p className="text-blue500">Email</p>,
            dataIndex: "email",
        },
        {
            title: <p className="text-blue500">Phone Number</p>,
            dataIndex: "number",
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
            <CustomDrawer open={open} setOpen={setOpen} data={drawerData}></CustomDrawer>
            <div><TableHeader title={"Users"} icon={users} property1='Premium Plus Users ' property2='Total Users' data1='500' data2='1,234' /></div>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default PremiumPlusUsers;