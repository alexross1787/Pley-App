// This file allows GET requests for the Yelp Fusion API
// This first line automatically updates the unique Yelp API token
import { YELP_API, BEARER_TOKEN } from "./api-config";

// Query string package
import queryString from 'query-string'

// Goebel, Jan (2020). React Hooks Tutorial | Build Yelp in React #25 | adding networking logic by using the fetch API [export function get(path, queryParams) {const query = queryString.stringify(queryParams);return fetch(`${API_BASE_URL}${path}?${query}`, {headers: {Authorization: `Bearer ${BEARER_TOKEN}`,Origin: 'localhost',withCredentials: true,}});}] https://github.com/productioncoder/yelp-frontend/blob/master/src/hooks/yelp-api/api.js

// Query function that allows user to pass search parameters
export function get(path, queryParams) {
    const query = queryString.stringify(queryParams); 
        return fetch(`${YELP_API}${path}?${query}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Origin: 'localhost',
                // Allows localhost to retrieve information from Yelp Database
                // Need to explicitly state true, otherwise, can't access database with Fusion API
                withCredentials: true,
         }
    })
}