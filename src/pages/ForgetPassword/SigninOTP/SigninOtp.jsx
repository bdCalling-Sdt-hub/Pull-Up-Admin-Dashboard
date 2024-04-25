/* eslint-disable react/no-unescaped-entities */

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import OtpForm from "../../../components/OtpForm/OtpForm";
import bgImage from '../../../assets/bg.png'
import { ConfigProvider } from "antd";
import { inputThemes } from "../../../themes";
import { useVerifyForgetPasswordEmailMutation } from "../../../Redux/api/authApi";
import Swal from "sweetalert2";

const SigninOtp = () => {

    const navigate = useNavigate();

    const email = sessionStorage.getItem('email');

    const [forgetPassword] = useVerifyForgetPasswordEmailMutation();

    const handleSubmit = async (otp, otpError) => {
        console.log(otp, otpError);
        try {
            const response = await forgetPassword({ oneTimeCode: otp, email }).unwrap();
            console.log("response", response);

            if (response) {
                Swal.fire(response?.message, "", "success");
                navigate("/resetpassword");
            }

        }
        catch (error) {
            console.log(error);
        }

    };

    // const resendOtp = () => { };

    const redirectEmail = () => {
        navigate("/forgetpassword/email");
    };

    return (
        <ConfigProvider theme={inputThemes}>
            <div className="h-screen flex justify-center items-center"
                style={{
                    minHeight: "100vh",
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                    <div>
                        <div>
                            <div className="title">
                                <h1 className="text-2xl font-bold mt-5 mb-2 flex items-center " style={{ color: "#D0A65A", }}>
                                    {""}
                                    <span
                                        onClick={redirectEmail}
                                        className="cursor-pointer font-bold me-2 mt-1"
                                    >
                                        <IoIosArrowBack />
                                    </span>{" "}
                                    Verify OTP
                                </h1>
                                <p className="my-4">
                                    We'll send a verification code to your email. Check your inbox and enter the code here.
                                </p>
                            </div>
                            <OtpForm handleOtpSubmit={handleSubmit} btnText="Verify" />
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>

    );
};

export default SigninOtp;