/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */

import { LockOutlined } from "@ant-design/icons";
import style from "./resetPassword.module.css";
import { Button, Form, Input, Row, Col, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { inputThemes } from "../../../themes";
import bgImage from '../../../assets/bg.png'
import { useResetPasswordEmailMutation } from "../../../Redux/api/authApi";
import Swal from "sweetalert2";

export default function UpdatePassword() {
    const navigate = useNavigate();

    const [resetPassword] = useResetPasswordEmailMutation();

    const email = sessionStorage.getItem('email');

    const onSubmit = async (data) => {
        try {
            const response = await resetPassword({ password: data.password, email }).unwrap();
            console.log("response", response);

            if (response) {
                Swal.fire(response?.message, "", "success");
                navigate("/");
            }
 
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <ConfigProvider theme={inputThemes}>
            <div>
                <div style={{}}>
                    <div
                        className="flex justify-around items-center"
                        style={{
                            minHeight: "100vh",
                            backgroundImage: `url(${bgImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    >
                        <div>
                            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                                <div className={`${style.updatePasswordContainer} mt-2`}>
                                    <div className="title">
                                        <h1 className="text-2xl font-bold mt-5 mb-2 flex items-center " style={{ color: "#D0A65A" }}>
                                            {" "}
                                            <span className="cursor-pointer font-bold me-2 mt-1">
                                                <IoIosArrowBack />
                                            </span>{" "}
                                            Reset Password
                                        </h1>
                                    </div>
                                    {/* form */}
                                    <div className="mt-[80px]">
                                        <Form
                                            name="update-password"
                                            className=""
                                            initialValues={{}}
                                            onFinish={onSubmit}
                                        >
                                            <div>
                                                {/* <label htmlFor="email" className="font-semibold">
                                                    New password
                                                </label> */}
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        // {
                                                        //     required: true,
                                                        //     message: "Please input your Password!",
                                                        // },
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={
                                                            <LockOutlined className="site-form-item-icon" />
                                                        }
                                                        name="newPassword"
                                                        type="password"
                                                        placeholder=" Enter your password"
                                                        className={style.input}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div>
                                                {/* <label htmlFor="email" className="font-semibold">
                                                    Confirm Password
                                                </label> */}
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        // {
                                                        //     required: true,
                                                        //     message: "Please input your Password!",
                                                        // },
                                                    ]}
                                                >
                                                    <Input
                                                        name="confirmPassword"
                                                        prefix={
                                                            <LockOutlined className="site-form-item-icon" />
                                                        }
                                                        type="password"
                                                        placeholder="Re-enter your password"
                                                        className={style.input}
                                                    />
                                                </Form.Item>
                                            </div>

                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="login-form-button"
                                                    block
                                                    style={{
                                                        height: "45px",
                                                        fontWeight: "400px",
                                                        fontSize: "18px",
                                                        background: "#D0A65A",
                                                        marginTop: "60px",
                                                    }}
                                                >
                                                    Confirm
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}