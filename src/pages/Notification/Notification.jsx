/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
// import SingleNotification from "../../../Components/Notification/SingleNotification";
import { Pagination } from "antd";
// import baseAxios from "../../../../Config";
// import ShowingPegination from "../../../Components/ShowingPegination";
import { IoMdNotificationsOutline } from "react-icons/io";


const Notification = () => {
    const pageSize = 10;
    const [notificationData, setNotificationDat] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // baseAxios
        //     .get(`api/notification?page=${page}&limit=${10}`)
        //     .then((res) => {
        //         setNotificationDat(res.data.data.attributes);
        //     })
        //     .then((err) => {
        //         console.log(err);
        //         if (err.response.data.message === "Invalid token") {
        //             localStorage.removeItem("token");
        //             localStorage.removeItem("yourInfo");
        //         }
        //     });
    }, [page]);

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
                    {/* {notificationData?.notifications?.map((data) => (
                        <SingleNotification data={data} />
                    ))} */}

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
                                    {/* {data?.message} */}
                                    You have received $500 from John Doe
                                </h1>
                                <h1 className="text-sm font-normal mt-5]">
                                    {/* {data?.message} */}
                                    Fri, 12:30pm
                                </h1>
                            </div>

                            
                        </div>

                        
                    </div>
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
                                className=""
                                defaultCurrent={notificationData?.pagination?.page}
                                total={notificationData?.pagination?.totalResults}
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