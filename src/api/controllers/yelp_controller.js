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

const fetchData = async (searchTerm) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.YELP_API_KEY}`
            }
        };

        // Use dynamic import() instead of require()
        const fetch = (await import('node-fetch')).default;

        const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${searchTerm}&sort_by=best_match&limit=20`, options);

        if (!response.ok) {
            throw new Error('Network response does not work');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};

router.get('/:searchTerm', async (req, res) => {
    try {
        const data = await fetchData(req.params.searchTerm);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json('Failed to fetch data');
    }
});

module.exports = router;

