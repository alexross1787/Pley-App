const router = require("express").Router();

const fetchData = async (searchTerm) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                // *IMPORTANT* DO NOT FORGET TO USE PLACEHOLDER INSTEAD OF OUR UNIQUE KEY PLEASE AND THANK YOU
                Authorization: 'Bearer INSERT KEY HERE'
            }
        }
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=best_match&limit=20`, options)
        if (!response.ok) {
            throw new Error('Network response does not work')
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    }
};

// GET /businesses
router.get("/:searchTerm", async (req, res) => {
    try {
        const data = await fetchData(req.params.searchTerm);
        res.status(200).json(data); // Send the fetched data as response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json('Failed to fetch data');
    }
});


module.exports = router