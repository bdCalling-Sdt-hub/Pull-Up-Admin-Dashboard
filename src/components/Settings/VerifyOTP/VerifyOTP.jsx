/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
// import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { useForgetPasswordMutation, useVerifyForgetPasswordMutation } from "../../../Redux/api/authApi";

const VerifyOTP = () => {
    let { email } = useParams();
    const UserData = JSON.parse(localStorage.getItem("yourInfo"));
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60);

    const [veryForgetPassword] = useVerifyForgetPasswordMutation();
    const [forgetPassword] = useForgetPasswordMutation();

    const handleOtp = async (e) => {
        e.preventDefault();
        // console.log(otp);
        // navigate("/settings/update-password");

        try {
            const response = await veryForgetPassword({ oneTimeCode: otp }).unwrap();
            console.log("response", response);

            if (response) {
                Swal.fire(response?.message, "", "success");
                navigate("/settings/update-password");
            }

        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.message,
            });
        }
    };

    const handleResendOtp = async (e) => {
        e.preventDefault();
        console.log("Resend Otp");

        try {
            const response = await forgetPassword().unwrap();
            console.log("response", response);

            if (response) {
                Swal.fire(response?.message, "", "success");
                // navigate("/settings/verify-otp");
            }

        } catch (err) {
            console.error("Forget Password Error:", err);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response?.message,
            });
        }

    };

    const navigate = useNavigate();
    return (
        <div className=" p-5">
            <form className="w-[750px]">
                <p className="my-5 font-medium">
                    We'll send a verification code to your email. Check your inbox and
                    enter the code here.
                </p>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    // containerStyle={style.otpFormContainer}
                    inputStyle={{
                        width: "120px",
                        height: "120px",
                        fontSize: "50px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                    renderSeparator={<span style={{ width: "20px" }}></span>}
                    renderInput={(props) => <input {...props} />}
                />

                <div className="flex justify-between mt-5">
                    <p className=" text-lg font-medium text-[#858585)]">
                        Didn't receive the code?{" "}
                    </p>
                    <p
                        className="text-primary text-lg font-semibold cursor-pointer 
          "
                        onClick={handleResendOtp}
                    >
                        Resend Code
                    </p>
                </div>
                {/* <!-- Login Button --> */}
                <button
                    type="submit"
                    onClick={handleOtp}
                    className="bg-primary w-full text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] mt-10 py-3"
                >
                    Verify
                </button>
            </form>
        </div>
    );
};

export default VerifyOTP;