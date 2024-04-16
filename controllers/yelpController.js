const router = require("express").Router();

const fetchData = async (searchTerm) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                // *IMPORTANT* DO NOT FORGET TO USE PLACEHOLDER INSTEAD OF OUR UNIQUE KEY PLEASE AND THANK YOU
                Authorization: 'Bearer INSERT YELP KEY'
            }
        }
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=best_match&limit=20`, options)
        if (!response.ok) {
            throw new Error('Network response does not work')
        }
        const jsonData = await response.json();
        console.log(jsonData)
    } catch (error) {
        console.log(error)
    }
};

// GET /businesses
router.get("/:searchTerm", (req, res) => {
    const data = fetchData(req.params.searchTerm)
    res.render("searchPage", { searchData: data })
});

module.exports = router