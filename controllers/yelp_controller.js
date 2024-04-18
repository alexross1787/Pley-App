// const router = require('express').Router();
// const fetch = require('node-fetch')

// /* Yelp Controller: * Author:(Moreta, O) * Date: (April 16, 2024) * Avaialbility: (In class assistance) */
// const fetchData = async (searchTerm) => {
//     try {
//         const options = {
//             method: 'GET',
//             headers: {
//                 accept: 'application/json',
//                 // *IMPORTANT* DO NOT FORGET TO USE PLACEHOLDER INSTEAD OF OUR UNIQUE KEY PLEASE AND THANK YOU
//                 Authorization: 'Bearer kYacL2c57nggdw4pMvQeWyrowP2ysRkCtzpXFC1zL3dqNb9Opxjo6QgriTRFi2zurMcgiNqjeISvmASx2OPl3BX-Eq0CrLcKj48-7_v6M4aVsTgLjkBD0d04A-odZnYx'
//             }
//         }
//         const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=best_match&limit=20`, options)
//         console.log('response', response)
//         if (!response.ok) {
//             throw new Error('Network response does not work')
//         }
//         const jsonData = await response.json();
//         // return jsonData;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Failed to fetch data');
//     }
// };

// // GET /businesses
// router.get('/:searchTerm', async (req, res) => {
//     try {
//         const data = await fetchData(req.params.searchTerm);
//         res.status(200).send(data); // Send the fetched data as response
//         console.log(data)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json('Failed to fetch data');
//     }
// //     await fetchData(req.params.searchTerm)
// });


// module.exports = router

const router = require('express').Router();

/* Yelp Controller: * Author:(Moreta, O) * Date: (April 16, 2024) * Avaialbility: (In class assistance) */
const fetchData = async (searchTerm) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                // *IMPORTANT* DO NOT FORGET TO USE PLACEHOLDER INSTEAD OF OUR UNIQUE KEY PLEASE AND THANK YOU
                Authorization: 'Bearer kYacL2c57nggdw4pMvQeWyrowP2ysRkCtzpXFC1zL3dqNb9Opxjo6QgriTRFi2zurMcgiNqjeISvmASx2OPl3BX-Eq0CrLcKj48-7_v6M4aVsTgLjkBD0d04A-odZnYx'
            }
        }
        // Using dynamic import() instead of require() for ES Module
        const fetch = await import('node-fetch');
        const response = await fetch.default(`https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=best_match&limit=20`, options);
        // console.log('response', response);
        if (!response.ok) {
            throw new Error('Network response does not work');
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    }
};

// GET /businesses
router.get('/:searchTerm', async (req, res) => {
    try {
        const data = await fetchData(req.params.searchTerm);
        console.log(data)
        res.status(200).json(data); // Send the fetched data as response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json('Failed to fetch data');
    }
});

module.exports = router;