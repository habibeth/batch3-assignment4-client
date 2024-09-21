
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TProduct } from "../../../types/productManagement";
import { baseApi } from "../../api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/products',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['products'],
            transformResponse: (response: TResponseRedux<TProduct[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/products/create-product',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['products']
        }),

        updateProduct: builder.mutation({
            query: (args) => ({
                url: `/products/${args.id}`,
                method: 'PATCH',
                body: args.data,
            }),
            invalidatesTags: ['products']
        }),

        getSingleProducts: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'GET',
                };
            },
            providesTags: ['products'],
            transformResponse: (response: TResponseRedux<any>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['products']
        }),
    })
})


export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useGetSingleProductsQuery,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productManagementApi