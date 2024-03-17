/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import baseAxios from "../../../../Config";

const Profile = () => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("yourInfo"));
    const [fileList, setFileList] = useState([
        {
            uid: "-1",
            name: "",
            status: "done",
            url: "",
        },
    ]);
    const [profileEdit, setProfileEdit] = useState(false);
    const [file, setFile] = useState(null);
    const [fullName, setFullName] = useState(userFromLocalStorage?.fullName);
    const [email, setEmail] = useState(userFromLocalStorage?.email);
    const [image, setImage] = useState();
    const [phoneNumber, setPhoneNumber] = useState(
        userFromLocalStorage?.phoneNumber
    );
    const [dateOfBirth, setDateOfBirth] = useState(
        userFromLocalStorage?.dateOfBirth
    );
    const [address, setAddress] = useState(userFromLocalStorage?.address);

    const handleDatePickerChange = (date, dateString) => {
        console.log(date, dateString);
    };

    // console.log(fullName, +" , " + email, +" , " + phoneNumber, +" , " + address);
    // console.log(userFromLocalStorage);

    const handleChange = () => {
        setProfileEdit(true);
    };

    const handleFileChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setImage(newFileList[0].originFileObj);
        // console.log(newFileList[0].originFileObj);
    };

    const handleSubmit = () => {
        const formData = new FormData();

        // Append individual fields to the FormData object
        formData.append("fullName", fullName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("dateOfBirth", dateOfBirth);
        formData.append("address", address);
        formData.append("gender", "Male");
        formData.append("countryCode", "+880");

        // Append the image file if you have it (assuming 'image' is a File object)
        if (image) {
            formData.append("image", image);
        }

        console.log("form data", formData);

        // baseAxios
        //     .put(`/api/users/update`, formData, {
        //         headers: {
        //             // Do not set Content-Type here; Axios will set it automatically for FormData
        //             "Content-Type": "multipart/form-data",
        //             authorization: `Bearer ${localStorage.getItem("token")}`,
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res.data);
        //         // here localsotrage is updated
        //         localStorage.setItem(
        //             "yourInfo",
        //             JSON.stringify(res.data.data.attributes)
        //         );
        //         setProfileEdit(false);
        //     })
        //     .catch((err) => {
        //         if (err.response.data.message === "Invalid token") {
        //             localStorage.removeItem("token");
        //             localStorage.removeItem("yourInfo");
        //         }
        //         console.log(err);
        //     });
    };

    return (
        <div className="mt-[24px] border-secondary border-[1px] rounded-2xl h-[780px] ">
            <div className="p-[30px]">
                {!profileEdit ? (
                    <>
                        <div className="border-b-[1.5px] border-black py-3 mb-5">
                            <h1 className="text-3xl font-semibold">
                                Profile
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center gap-5">
                                <Image
                                    width={150}
                                    height={150}
                                    style={{ borderRadius: "6px" }}
                                // src={userFromLocalStorage.image?.publicFileUrl}
                                />
                                <div style={{ width: "400px" }}>
                                    <h2>{userFromLocalStorage?.fullName}</h2>
                                </div>
                            </div>
                            {/* <div>
                                <button
                                    onClick={handleChange}
                                    className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg"
                                >
                                    <LiaEditSolid fontSize={16} />
                                    Edit
                                </button>
                            </div> */}
                        </div>

                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>

                                <div className='bg-[#ececec] flex items-center gap-4 py-2 px-4 rounded-lg'>
                                    <FaRegUser color='#0071E3' />
                                    <p style={{ fontSize: "18px" }}>Ann Marie</p>
                                </div>
                                {/* <label htmlFor="">Name</label>
                                <Input
                                    style={{ height: "45px" }}
                                    // defaultValue={userFromLocalStorage?.fullName}
                                    defaultValue="Ann Marie"
                                    readOnly
                                /> */}
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                {/* <label htmlFor="">Email</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.email}
                                    readOnly
                                /> */}
                                <div className='bg-[#ececec] flex items-center gap-4 py-2 px-4 rounded-lg'>
                                    <MdOutlineEmail color='#0071E3' />
                                    <p style={{ fontSize: "18px" }}>annmarie@gmail.com</p>
                                </div>
                            </Col>
                        </Row>

                        <Row gutter={15} style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                {/* <label htmlFor="">Phone Number</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.phoneNumber}
                                /> */}
                                <div className='bg-[#ececec] flex items-center gap-4 py-2 px-4 rounded-lg'>
                                    <FaPhoneAlt color='#0071E3' />
                                    <p style={{ fontSize: "18px" }}>+1 23444 2344</p>
                                </div>
                            </Col>

                        </Row>

                        <Row gutter={15} style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                {/* <label htmlFor="">Phone Number</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.phoneNumber}
                                /> */}
                                <div className='bg-[#ececec] flex items-center gap-4 py-2 px-4 rounded-lg'>
                                    <BsCalendar2Date color='#0071E3' />
                                    <p style={{ fontSize: "18px" }}>11/12/1989</p>
                                </div>
                            </Col>

                        </Row>
                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                {/* <label htmlFor="">Address</label>
                                <Input.TextArea
                                    style={{ height: "170px" }}
                                    // defaultValue={userFromLocalStorage?.address}
                                    defaultValue="address"
                                    readOnly
                                /> */}
                                <div className='bg-[#ececec] flex items-center gap-4 py-2 px-4 rounded-lg'>
                                    <CiLocationOn color='#0071E3' />
                                    <p style={{ fontSize: "18px" }}>12 st avanue New York, USA</p>
                                </div>
                            </Col>
                        </Row>


                        <Row style={{
                            marginBottom: "15px"
                        }}>
                            <Col span={24}>
                                <div>
                                    <button
                                        onClick={handleChange}
                                        className="flex items-center w-full justify-center gap-2 bg-black text-white px-5 py-2 rounded-lg absolute top-20"
                                    >
                                        {/* <LiaEditSolid fontSize={16} /> */}
                                        Update Profile
                                    </button>
                                </div>
                            </Col>
                        </Row>

                    </>
                ) : (
                    <>
                        <div
                            onClick={() => setProfileEdit(false)}
                            className="flex items-center mb-5 cursor-pointer"
                        >
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-black "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </div>
                            <div className="text-3xl  font-semibold ">
                                Edit Profile
                            </div>
                        </div>

                        <div className="border-b-[1.5px] border-black py-3 mb-5 ">
                            <ImgCrop rotationSlider>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={handleFileChange}
                                >
                                    {fileList.length < 1 && "+ Upload"}
                                </Upload>
                            </ImgCrop>

                            <div>
                                <h2>{userFromLocalStorage?.fullName}</h2>
                            </div>
                        </div>

                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Name</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Email</label>
                                <Input
                                    disabled
                                    type="email"
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Row gutter={15} style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Phone Number</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={userFromLocalStorage?.phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Col>

                        </Row>
                        <Row gutter={15} style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Date of Birth</label>
                                <DatePicker
                                    onChange={handleDatePickerChange}
                                    style={{ height: "45px", width: "100%" }}
                                    defaultValue={dayjs(
                                        userFromLocalStorage?.dateOfBirth,
                                        "DD-MM-YY"
                                    )}
                                />
                            </Col>

                        </Row>
                        <Row style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Address</label>
                                <Input.TextArea
                                    style={{ height: "100px" }}
                                    // defaultValue={userFromLocalStorage.address}
                                    defaultValue="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-black text-white px-5 py-2 rounded-lg w-full"
                            block
                        >
                            Save
                        </button>
                    </>
                )}
            </div>
        </div >
    );
};

export default Profile;