import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6817b8c0565a4b41810915c39f34f393'
    }
})