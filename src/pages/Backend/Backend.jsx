import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BackendOutputPage = () => {
  const [pin, setPin] = useState('');
  const [pinSet, setPinSet] = useState(false);
  const [btn, setBtn] = useState(0);
  const [post, setPost] = useState(null); // State to store the API response data

  useEffect(() => {
    if (pinSet) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
          setPost(response.data[0].PostOffice); // Set the post data
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      setPinSet(false); 
    }
  }, [btn, pinSet, pin]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <input 
        placeholder='Enter pin' 
        value={pin} 
        onChange={(e) => setPin(e.target.value)} 
      />
      <button 
        onClick={(e) => {
          e.preventDefault();
          setPinSet(true);
          setBtn((prev) => prev + 1); // Trigger the useEffect
        }}
      >
        Submit
      </button>

      <h1>Backend output should display here</h1>

   
      {post ? (
        <div>
          {post.map((element) => (
            <div key={element.Name}>Name={element.Name}, State={element.State}</div>
          ))}
        </div>
      ) : ''}
    </div>
  );
};

export default BackendOutputPage;
