/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
// import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useChangePasswordMutation, useForgetPasswordMutation } from "../../../Redux/api/authApi";

const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const [currentPassword, setOldPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [changePassword] = useChangePasswordMutation();
    const [forgetPassword] = useForgetPasswordMutation();

   

    const handleForgetPassword = async () => {

        try {
            const response = await forgetPassword().unwrap();
            console.log("response", response);

            if (response) {
                Swal.fire(response?.message, "", "success");
                navigate("/settings/verify-otp");
            }

        } catch (err) {
            console.error("Forget Password Error:", err);

            // Check if the error has a response
            if (err.response) {
                const { status, data } = err.response;
                console.error("Status:", status);
                console.error("Data:", data);

                // Handle specific error messages
                if (status === 401) {
                    Swal.fire("Unauthorized! Please log in.", "", "error");
                } else {
                    Swal.fire(data?.message || "An error occurred.", "", "error");
                }
            } else {
                Swal.fire("An error occurred.", "", "error");
            }
        }
    };


    const handleChangePassword = async () => {
        if (newPassword === confirmPassword) {

            const response = await changePassword({ currentPassword, newPassword, confirmPassword }).unwrap();
            console.log("response", response)

            Swal.fire({
                icon: "success",
                title: response?.message,
            });

            navigate("/settings");

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password and Confirm Password does not match",
            });
        }
    };

    return (
        <div className="p-5">
            <div className="mb-4 w-[750px]">
                <p className="text-zinc-800 pb-2 font-semibold">
                    Current Password
                </p>
                {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your current password"
          onChange={(e) => setOldPassword(e.target.value)}
        /> */}
                <Input.Password
                    placeholder="Enter your current password"
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[750px]">
                <p className="text-zinc-800 pb-2 font-semibold">
                    New Password
                </p>
                {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
        /> */}
                <Input.Password
                    placeholder="Enter your new password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[750px]">
                <p className="text-zinc-800 pb-2 font-semibold">
                    Confirm New Password
                </p>
                {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}

                <Input.Password
                    placeholder="Confirm your new password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                />
            </div>
            <p
                onClick={handleForgetPassword}
                className="text-lg cursor-pointer text-red-500 font-semibold"
            >
                Forgot Password?
            </p>
            <button
                onClick={handleChangePassword}
                className="mt-5 bg-[#D07E2B] hover:bg-[#D07E2B] w-[750px] text-white font-bold py-3 px-4 rounded-md"
            >
                Change Password
            </button>
        </div>
    );
};

export default ChangePasswordPage;