import axios from 'axios';
import express from 'express'
import readline from 'readline'
const port=5000;


const app=express()

// Set up readline to take input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// The GET route to handle the API logic
app.get('/', async (req, res) => {
  rl.question('Please enter your pin code: ', async (pin) => {
    try {
      // Make API request to get data for the pin code
      const data = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      const data1 = data.data[0].PostOffice;

      // Log data to the console
      console.log(data1);

      // Send the response back to the client
      res.json(data1);

      // Close the readline interface after the input is processed
      rl.close();
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });
});

// Start the express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
