import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '5114c5f3f4msh14ca9cacb15ee82p1773bejsn5bb1a8982d24',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

//from redux-toolkit
export const cryptoApi = createApi({

    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),

    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:()=> createRequest("/coins")
        })
    })

});

export const {
    useGetCryptosQuery,
 } = cryptoApi;