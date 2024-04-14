const axios = require('axios');

// Define your API endpoint
const API_URL = 'https://api.example.com/data';


async function fetchData() {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}

// Example usage
fetchData()
    .then(data => {
        console.log('Received data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
