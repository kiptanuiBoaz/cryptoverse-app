import  {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptosNewsApiHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key':process.env.REACT_APP_CRYPTOCURRENCIES_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
   
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers:cryptosNewsApiHeader})

export const cryptoNewsApi = createApi({

    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
        
});

export const {useGetCryptosNewsQuery} =  cryptoNewsApi;