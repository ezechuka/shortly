import axios from "axios"

export const fetchApi = (url) => {
    const response = axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    return response
}