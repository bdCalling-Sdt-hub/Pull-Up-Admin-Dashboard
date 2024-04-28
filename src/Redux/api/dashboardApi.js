import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        userStatistics: builder.query({
            query: (query) => ({
                url: "/users/user-statistics",
                method: "GET",
                params: query,
            }),
            providesTags: [tagTypes.user],
        }),

        incomeRatio: builder.query({
            query: () => ({
                url: "/users/income-ratio",
                method: "GET"
            }),
            providesTags: [tagTypes.user],
        }),


        // -----------------------
        // profile: builder.query({
        //     query: () => ({
        //         url: "/users/profile",
        //         method: "GET",
        //     }),
        //     providesTags: [tagTypes.user],
        // }),
        // SingleUser: builder.query({
        //     query: (id) => ({
        //         url: `/users/${id}`,
        //         method: "GET",
        //     }),
        //     providesTags: [tagTypes.user],
        // }),
        // updateProfile: builder.mutation({
        //     query: (data) => ({
        //         url: "/users/",
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // updateUserByManager: builder.mutation({
        //     query: (data) => ({
        //         url: `/users/update-user/${data.id}`,
        //         method: "PATCH",
        //         body: data?.body,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // updatePassWord: builder.mutation({
        //     query: (data) => ({
        //         url: "/users/update-password",
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // RetrivemangerUsers: builder.query({
        //     query: () => ({
        //         url: "/users/managers-users",
        //         method: "GET",
        //     }),
        //     providesTags: [tagTypes.user],
        // }),
        // ChangeUserStatus: builder.mutation({
        //     query: (data) => ({
        //         url: `/users/change-status/${data?.id}`,
        //         method: "PATCH",
        //         body: data?.body,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // ChangePassword: builder.mutation({
        //     query: (data) => ({
        //         url: `/users/change-password/`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // ForgetPassword: builder.mutation({
        //     query: (data) => ({
        //         url: `/users/forget-password`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),
        // ResetPassword: builder.mutation({
        //     query: (data) => ({
        //         url: `/users/reset-password/`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: [tagTypes.user],
        // }),

        // -------------------
        transactions: builder.query({
            query: (query) => ({
                url: `/payment/transactions`,
                method: "GET",
                params: query
            }),
            providesTags: [tagTypes.user],
        })
    }),
});

export const {
    useAllUsersQuery,
    useUserStatisticsQuery,
    useIncomeRatioQuery,
    // useProfileQuery,
    // useUpdatePassWordMutation,
    // useUpdateProfileMutation,
    // useRetrivemangerUsersQuery,
    // useChangeUserStatusMutation,
    // useSingleUserQuery,
    // useUpdateUserByManagerMutation,
    // useChangePasswordMutation,
    // useForgetPasswordMutation,
    // useResetPasswordMutation,
    useTransactionsQuery,
} = dashboardApi;