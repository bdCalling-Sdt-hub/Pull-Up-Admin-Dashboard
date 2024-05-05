import { Avatar, Card } from "antd";
import { BiLocationPlus } from "react-icons/bi";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useGetEventQuery } from "../../../Redux/api/dashboardApi";
import CustomDrawerEvent from "../../../components/UI/CustomDrawerEvent";
import showImage from "../../../utils/showImage";

const Event = () => {

    // const shops = [
    //     {
    //         "id": 1,
    //         "name": "InnovateX: The Future of ",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.5,
    //         "location": "36 Guild Street London ",
    //         "details": "Turkish Café is a cozy place where you can enjoy authentic Turkish coffee and delicious pastries. Whether you're looking for a place to relax or catch up with friends, Turkish Café has you covered.",
    //         "openingHours": [
    //             "Monday-Friday: 8:00 AM - 10:00 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: Closed"
    //         ],
    //         "contact": {
    //             "phone": "+880 123 456 789",
    //             "email": "turkishcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "name": "Another Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.2,
    //         "location": "Dhaka",
    //         "details": "Another Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 7:00 AM - 9:00 PM",
    //             "Saturday: 8:00 AM - 10:00 PM",
    //             "Sunday: 10:00 AM - 6:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 987 654 321",
    //             "email": "anothercafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 3,
    //         "name": "Third Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 4,
    //         "name": "InnovateX: The Future of ",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 5,
    //         "name": "InnovateX: The Future of ",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 6,
    //         "name": "Third Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 7,
    //         "name": "InnovateX: The Future of ",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 8,
    //         "name": "Third Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 9,
    //         "name": "Third Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     },
    //     {
    //         "id": 10,
    //         "name": "Third Café",
    //         "image": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    //         "rating": 4.0,
    //         "location": "Dhaka",
    //         "details": "Third Café description goes here.",
    //         "openingHours": [
    //             "Monday-Friday: 8:30 AM - 9:30 PM",
    //             "Saturday: 9:00 AM - 11:00 PM",
    //             "Sunday: 10:00 AM - 8:00 PM"
    //         ],
    //         "contact": {
    //             "phone": "+880 111 222 333",
    //             "email": "thirdcafe@example.com"
    //         }
    //     }
    // ]


    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState();

    console.log(open)

    const handleOnCline = (data) => {
        setDrawerData(data)
        setOpen((prev) => !prev);
    }


    const { data: allUserData } = useGetEventQuery();
    console.log("Package Data", allUserData)

    // const organisationAccounts = allUserData?.data?.result?.filter(
    //     (user) => user?.accountType === 'organisation'
    // );

    return (
        <div>

            <CustomDrawerEvent open={open} setOpen={setOpen} data={drawerData}></CustomDrawerEvent>

            <div className="flex flex-wrap justify-center gap-4">
                {allUserData?.data?.map((data) => (
                    <Card
                        key={data.id}
                        style={{ width: 300 }}
                        cover={<img alt={data?.eventData?.name} src={showImage(data?.eventData?.image?.path)} style={{ height: "220px" }} />}
                    // actions={[
                    //     <button onClick={() => handleOnCline(data)} className="bg-[#D0A65A] px-4 py-1 rounded-md text-white" key="details">
                    //         Details
                    //     </button>,
                    // ]}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#454545] text-lg">{data?.eventData?.name}</h1>
                            {/* <p className="flex items-center">
                                <span>
                                    <img src={star} alt="star" />
                                </span>
                                ({data?.averageRating})
                            </p> */}
                        </div>


                        <Avatar.Group
                            key={data.id}
                            maxCount={2}
                            maxPopoverTrigger="click"
                            size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                cursor: 'pointer',
                            }}
                        >

                            {data?.userData?.map((userData) => (
                                <Avatar key={data.id} src={showImage(userData?.image?.path)} />
                            ))}
                        </Avatar.Group>




                        <div className="flex items-center justify-between">
                            <p className="flex items-center">
                                <span>
                                    <BiLocationPlus />
                                </span>
                                {data?.eventData?.location}
                            </p>
                            <button onClick={() => handleOnCline(data)} className="" key="details">
                                <FaRegArrowAltCircleRight size={24} />

                            </button>
                        </div>

                    </Card>
                ))}
            </div>



        </div>
    );
};

export default Event;