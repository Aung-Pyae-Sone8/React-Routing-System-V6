import { useEffect, useRef, useState } from 'react';

function useFetch(url, _options) {

    let [data,setData] = useState(null);
    let [ loading, setLoading] = useState(false);
    let [ error, setError ] = useState(null);
    let options = useRef(_options).current;


    useEffect(()=>{
        console.log(options);
        let abortController = new AbortController();
        let signal = abortController.signal;
        setLoading(true);
        fetch(url, {
            signal
        })
        .then(res => {
            if(!res.ok) {
                throw Error('Something went wrong!');
            }
            return res.json(); 
        })
        .then(data => {
            setData(data);
            setError(null);
            setLoading(false);
        }) 
        .catch(e => {
            setError(e.message);
        })

        // cleanup function
        return () => {
            abortController.abort();
        }

    },[url, options]);
    //fetch run -> first render -> useEffect
    //fetch -> dynamic -> url
    //output -> api's data

    return {
        data ,
        loading ,
        error // if data = data (key name is equal value name,write one)
    };
}

export default useFetch;