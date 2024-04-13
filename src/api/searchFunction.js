// This file allows the user to search for businesses
// Businesses that are returned should be from the Yelp Database
import { useState, useEffect } from 'react';
import * as api from './yelp-api'

export function searchFunction(term, location) {
    const [restaurants, setRestaurants] = useState([]);
    const [searchParams, setSearchParams] = useState({ term, location })

    useEffect (() => {
        setRestaurants([]);
        const fetchData = async () => {
            try {
                const yelpData = await api.get('/businesses/search', searchParams)
                const parse = await yelpData.json
                setRestaurants(parse.buisnesses)
            } catch(err) {
                console.log('Could not fetch data.')
            }
        }
        fetchData();
    }, [term, location, searchParams])
    return [restaurants, searchParams, setSearchParams]
}