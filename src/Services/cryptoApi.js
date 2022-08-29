import { createApi, fetchBasequery} from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '5114c5f3f4msh14ca9cacb15ee82p1773bejsn5bb1a8982d24',
//  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers:cruptoApiHeaders})

//from redux-toolkit
export const CryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:{fetchBasequery({baseUrl})},
    endpoints: (builder)=>{
        getCryptos: builder.query({
            query:()=> createReequest("/exchanges")
        })
    }

})