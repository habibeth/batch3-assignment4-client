import { TCart } from "../../../types/cartManagement";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const cartManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (data) => ({
                url: '/carts/add-cart',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['carts']
        }),
        getMyCarts: builder.query({
            query: (email) => {
                return {
                    url: `/carts/${email}`,
                    method: 'GET',
                }
            },
            providesTags: ['carts'],
            transformResponse: (response: TResponseRedux<TCart[]>) => {
                return {
                    data: response.data
                }
            }
        }),
        deleteCart: builder.mutation({
            query: (data) => ({
                url: '/carts',
                method: 'DELETE',
                body: data,
            }),
            invalidatesTags: ['carts']
        }),
    })
})


export const {
    useAddToCartMutation,
    useGetMyCartsQuery,
    useDeleteCartMutation
} = cartManagementApi