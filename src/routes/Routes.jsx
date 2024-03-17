import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Signup from "../pages/Signin/Signin";
import FreeUsers from "../pages/Dashboard/Users/FreeUsers";
import SigninOtp from "../pages/ForgetPassword/SigninOTP/SigninOtp";
import Email from "../pages/ForgetPassword/Email/Email";
import ResetPassword from "../pages/ForgetPassword/ResetPassword/ResetPassword";
import Settings from "../pages/Settings/Settings";
import SettingPage from "../pages/Settings/SettingsPage/SettingPage";
import PremiumUsers from "../pages/Dashboard/Users/PremiumUsers";
import PremiumPlusUsers from "../pages/Dashboard/Users/PremiumPlusUsers";
import TodayIncome from "../pages/Dashboard/Incomes/TodayIncome";
import WeeklyIncome from "../pages/Dashboard/Incomes/WeeklyIncome";
import MonthlyIncome from "../pages/Dashboard/Incomes/MonthlyIncome";
import Notification from "../pages/Notification/Notification";
import Profile from "../pages/Profile/Profile";
import SubscriptionPlan from "../pages/Dashboard/SubscriptionPlan/SubscriptionPlan";
import Categories from "../pages/Dashboard/Categories/Categories";
import CategoriesDetails from "../pages/Dashboard/Categories/CategoriesDetails";
import QuestionDiscussion from "../pages/Dashboard/Categories/QuestionDiscussion";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/free-users",
                element: <FreeUsers></FreeUsers>
            },
            {
                path: "/premium-users",
                element: <PremiumUsers></PremiumUsers>
            },
            {
                path: "/premium-plus-users",
                element: <PremiumPlusUsers></PremiumPlusUsers>
            },
            {
                path: "/today",
                element: <TodayIncome></TodayIncome>
            },
            {
                path: "/weekly",
                element: <WeeklyIncome></WeeklyIncome>
            },
            {
                path: "/monthly",
                element: <MonthlyIncome></MonthlyIncome>
            },
            {
                path: "/subscription-plan",
                element: <SubscriptionPlan></SubscriptionPlan>
            },
            {
                path: "/categories",
                element: <Categories></Categories>
            },
            {
                path: "/categorydetails",
                element: <CategoriesDetails></CategoriesDetails>
            },
            {
                path: "/question/:id",
                element: <QuestionDiscussion></QuestionDiscussion>
            },
            {
                path: "/settings",
                element: <Settings></Settings>
            },
            {
                path: "/settings/:dynamic",
                element: <SettingPage></SettingPage>
            },
            {
                path: "/notifications",
                element: <Notification></Notification>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },

        ]
    },
    {
        path: "/signin",
        element: <Signup></Signup>
    },
    {
        path: "/otp",
        element: <SigninOtp></SigninOtp>
    },
    {
        path: "/email",
        element: <Email></Email>
    },
    {
        path: "/resetpassword",
        element: <ResetPassword></ResetPassword>
    },
]);