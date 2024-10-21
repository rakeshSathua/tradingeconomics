import axios from "axios";

export async function getIndicator(){
    try {

        const api_key = '0ab7e6a95b0343a:2ul05gav65l55fe'
        //Key using env Variable when more request being made 

        const response = await axios.get(`https://api.tradingeconomics.com/country/all/gdp?c=${api_key}`)
        
        return response?.data || [];

    } catch (error) {
        //log the error if needed;
        return [];

    }

}

