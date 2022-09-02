import  {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders= {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key":process.env.REACT_APP_CRYPTONEWS_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({url, headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({

    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query:({newsCategory,count})=> createRequest(`/coins?limit=${count}`)
        })
    })
        
});