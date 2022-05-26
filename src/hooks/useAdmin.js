import axios from 'axios'
import { useEffect, useState } from 'react'

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const url = `https://morning-ocean-16366.herokuapp.com/isAdmin?email=${email}`
        axios.get(url).then((data) => {
            setIsAdmin(data.data.isAdmin)
            setLoading(false)
        })
    }, [email])
    return [isAdmin, loading]
}
export default useAdmin
