import useSWR from 'swr'
import {url} from "../next.config";

const baseURL = url;


const response = (...args) => fetch(...args).then(res => res.json())


export default function useFetcher (endpoint) {
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)

    let arr = data?.data
    
    return {
        arr, 
        isLoading: !error && !data,
        isError: error
    }
}