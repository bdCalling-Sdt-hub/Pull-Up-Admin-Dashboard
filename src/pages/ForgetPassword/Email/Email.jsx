/* eslint-disable react/no-unescaped-entities */
import { MailOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import style from "./email.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import bgImage from '../../../assets/bg.png'
import { inputThemes } from "../../../themes";
import { useForgetPasswordEmailMutation } from "../../../Redux/api/authApi";
import Swal from "sweetalert2";

export default function Email() {
    const navigate = useNavigate();

    const [forgetPassword] = useForgetPasswordEmailMutation();

    const onSubmit = async (data) => {
        try {
            const response = await forgetPassword(data).unwrap();
            console.log("response", response);

            if (response) {
                sessionStorage.setItem("email", data.email);
                Swal.fire(response?.message, "", "success");
                navigate("/otp")
            }

        }
        catch (error) {
            console.log(error);
        }
    };

    const redirectSignin = () => {
        navigate("/signin");
    };

    return (
        <ConfigProvider theme={inputThemes}>
            <div>
                <Flex
                    align="center"
                    style={{
                        minHeight: "100vh",
                        backgroundImage: `url(${bgImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    justify="space-around"
                >

                    <div>
                        <div>
                            <div
                                style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>

                                <div className="title">
                                    <h1 className="text-2xl font-bold mt-5 mb-2 flex items-center" style={{ color: "#D0A65A" }}>
                                        {" "}
                                        <span
                                            onClick={redirectSignin}
                                            className="cursor-pointer font-bold me-2 mt-1"
                                        >
                                            <IoIosArrowBack />
                                        </span>{" "}
                                        Forget Password
                                    </h1>
                                    <p className="mt-[24px] mb-[64px]">
                                        Enter the email address associated with your account. <br />{" "}
                                        We'll send you an OTP in your email.{" "}
                                    </p>
                                </div>
                                {/* form */}
                                <div className={`${style.formContainer} mt-2`}>
                                    <Form
                                        name="forgetPasswordEmailFrom"
                                        className="forgetPassword-form mt-2"
                                        initialValues={{}}
                                        onFinish={onSubmit}
                                    >
                                        <div>
                                            {/* <label htmlFor="email" className="font-bold">
                                                Email
                                            </label> */}
                                            <Form.Item
                                                name="email"
                                                id="email"
                                                rules={[
                                                    // {
                                                    //     required: true,
                                                    //     message: "Please input your email!",
                                                    // },
                                                ]}
                                            >
                                                <Input
                                                    prefix={
                                                        <MailOutlined className="site-form-item-icon" />
                                                    }
                                                    placeholder="Email"
                                                    type="email"
                                                    className={`${style.input}`}
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
                                                    marginTop: "44px"
                                                }}
                                            >
                                                Send OTP
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </div>
        </ConfigProvider>
    );
}

