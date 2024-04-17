import { tagTypes } from "../../types/tags";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPrivacy: builder.mutation({
            query: (data) => ({
                url: "/privacy/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getPrivacy: builder.query({
            query: () => ({
                url: "/privacy/all",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),

        createAbout: builder.mutation({
            query: (data) => ({
                url: "/about/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getAbout: builder.query({
            query: () => ({
                url: "/about/all",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),

        createSupport: builder.mutation({
            query: (data) => ({
                url: "/support/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getSupport: builder.query({
            query: () => ({
                url: "/support/all",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),

        createTerms: builder.mutation({
            query: (data) => ({
                url: "/terms/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        getTerms: builder.query({
            query: () => ({
                url: "/terms/all",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
    }),
});

export const {
    useCreatePrivacyMutation,
    useGetPrivacyQuery,
    useCreateAboutMutation,
    useGetAboutQuery,
    useCreateSupportMutation,
    useGetSupportQuery,
    useCreateTermsMutation,
    useGetTermsQuery
} = authApi;
