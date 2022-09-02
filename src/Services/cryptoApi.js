// createApi  The primary source of RTK Query functionality. 
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

//from redux-toolkit
export const cryptoApi = createApi({

    reducerPath:"cryptoApi",
    // fetchBaseQuery provides a lightweight wrapper around fetch queries, which helps simplify requests.
    baseQuery:fetchBaseQuery({baseUrl}),

    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        })
    })

});

export const {
    useGetCryptosQuery,
 } = cryptoApi;