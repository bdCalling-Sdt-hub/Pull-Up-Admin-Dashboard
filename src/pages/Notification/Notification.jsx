/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
// import SingleNotification from "../../Components/Notification/SingleNotification";
import { Pagination } from "antd";
// import baseAxios from "../../../../Config";
// import ShowingPegination from "../../../Components/ShowingPegination";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNotificationQuery } from "../../Redux/api/dashboardApi";
import dayjs from "dayjs";


const Notification = () => {
    const pageSize = 10;
    const [notificationData, setNotificationDat] = useState([]);
    const [page, setPage] = useState(1);

    console.log(page)


    const { data: allNotificationData } = useNotificationQuery({ page: page, limit: 10 });
    console.log("Notification Data", notificationData)


    const notificationsDataGetByPagination = (page) => {
        console.log("page", page);
        setPage(page);
    };

    console.log(notificationData);

    return (
        <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl bg-white">
            <div className="p-[40px]">
                <div className="border-black border-b-[1px] pb-[35px] mb-[18px]">
                    <h1 className="text-3xl font-semibold">
                        Notification
                    </h1>
                </div>
                <div className="overflow-y-scroll h-[580px]">
                    {allNotificationData?.data?.result?.map((data) => (
                        // <SingleNotification data={data} />
                        <div className="border-b-[1px] pb-[10px] mt-3">
                            <div className="flex">
                                <div>
                                    <div className="h-[60px] w-[60px] rounded-lg bg-black flex justify-center items-center">
                                        <IoMdNotificationsOutline color="white" size={28} />
                                    </div>


                                    {/* <img
                                    className="h-[60px] w-[60px] rounded-full"
                                    // src={data?.imageLink}
                                    src=""
                                    alt=""
                                /> */}
                                </div>
                                <div className="flex flex-col ml-2 px-4">
                                    <h1 className="text-[20px] font-semibold mt-5]">
                                        {data?.message}
                                        {/* You have received $500 from John Doe */}
                                    </h1>
                                    <h1 className="text-sm font-normal mt-5]">
                                        {dayjs(data?.createdAt).format("ddd, h:mma")
                                        }
                                        {/* Fri, 12:30pm */}
                                    </h1>
                                </div>


                            </div>


                        </div>
                    ))}


                </div>
                <div className="mt-5">
                    <div className="flex justify-between">
                        <div lg={{ span: 12 }}>
                            <p className="text-lg font-normal">
                                Showing Pegination
                                {/* <ShowingPegination pagination={notificationData?.pagination} /> */}
                            </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <Pagination
                                pageSize={pageSize}
                                total={allNotificationData?.data?.meta?.total}
                                showQuickJumper={false}
                                showSizeChanger={false}
                                onChange={notificationsDataGetByPagination}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;