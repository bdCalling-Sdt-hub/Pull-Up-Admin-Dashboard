/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/categoryimage.png";
import { useProfileQuery, useUpdateProfileMutation } from "../../Redux/api/authApi";
import { useNavigate } from "react-router-dom";
import showImage from "../../utils/showImage";
// import baseAxios from "../../../../Config";

const Profile = () => {

    const [updateProfile] = useUpdateProfileMutation();
    const { data: profileData } = useProfileQuery();
    console.log(profileData)

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
    const [name, setName] = useState(profileData?.data?.name);
    const [email, setEmail] = useState(profileData?.data?.email);
    const [image, setImage] = useState();
    const [phoneNumber, setPhoneNumber] = useState(
        profileData?.data?.phoneNumber
    );

    useEffect(() => {
        setName(profileData?.data?.name);
        setName(profileData?.data?.email);
        setName(profileData?.data?.phoneNumber);
    }, [profileData?.data])


    const handleDatePickerChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleChange = () => {
        setProfileEdit(true);
    };

    const handleFileChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setImage(newFileList[0].originFileObj);
        // console.log(newFileList[0].originFileObj);
    };

    const handleSubmit = async () => {
        const formData = new FormData();

        // Append individual fields to the FormData object
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phoneNumber", phoneNumber);

        // Append the image file if you have it (assuming 'image' is a File object)
        if (image) {
            formData.append("image", image);
        }

        console.log("form data", formData);

        try {
            const response = await updateProfile(formData).unwrap();
            console.log("kella fote ---->", response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="mt-[24px] border-secondary border-[1px] rounded-2xl h-[780px] bg-white">
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
                                    // src={logo}
                                    src={showImage(profileData?.data?.image?.path)}
                                />
                                {/* <div style={{ width: "400px" }}>
                                    <h2>{profileData?.data?.name}</h2>
                                </div> */}
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
                                    <p style={{ fontSize: "18px" }}>{profileData?.data?.name}</p>
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
                                    <p style={{ fontSize: "18px" }}>{profileData?.data?.email}</p>
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
                                    <p style={{ fontSize: "18px" }}>{profileData?.data?.phoneNumber}</p>
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
                                    defaultValue={profileData?.data?.name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    defaultValue={profileData?.data?.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Row gutter={15} style={{ marginBottom: "15px" }}>
                            <Col span={24}>
                                <label htmlFor="">Phone Number</label>
                                <Input
                                    style={{ height: "45px" }}
                                    defaultValue={profileData?.data?.phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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