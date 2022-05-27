import axios from 'axios'

const fetcher = axios.create({
    baseURL: 'https://morning-ocean-16366.herokuapp.com',
})

export default fetcher
