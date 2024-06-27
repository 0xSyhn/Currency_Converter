import {useEffect, useState} from 'react';

 //uncalled rule : NAME SHOULD BE THE SAME AS HOOK
                              
function useCurrencyInfo(currency){
    const [data,setData] = useState({});                            //empty object if fetch doesnt return anything.
    //I want the function to be called only when the user uses it.
    useEffect(()=>{                      
        const fetchAPI =async () => {
            try{
            let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            //The fetched data is returned as string so you need to convert it into json.
            response = await response.json();
            setData(response[currency]);
            }
            catch(error){
                console.error('Error fetching currency data:', error);
                setData({ error: 'Failed to fetch data' });
            }
        } 
        if (currency) {
            fetchAPI();
        }
        },[currency])
        
        return data;                                     
}

export default useCurrencyInfo;




