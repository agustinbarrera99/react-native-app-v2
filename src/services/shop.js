import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    tagTypes:["userImage"],
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getProducts:builder.query({
            query:() => `/products.json`,
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getProduct:builder.query({
            query:(id) => `/products/${id}.json`
        })

    })
})

export const {  useGetCategoriesQuery, 
                useGetProductsQuery, 
                useGetProductQuery
} = shopApi