import React, { useState } from 'react';
import axios from 'axios';


const MyForm = () => {
  const [formData, setFormData] = useState({
    alternate_pay1: '',
    alternate_pay2: '',
    city: '',
    street: '',
    country: '',
    ifsc_code: '',
    ban_account_number: '',
    reference: '',
    select_card: '',
    Gl_desc: '',
    Gl_code: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://paymentassign.onrender.com/detail', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
      alert("payment Details Added Successfully");
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<div  >
<h1>Payment Details</h1>


    <form onSubmit={handleSubmit}>
   
      <input
        type="text"
        name="alternate_pay1"
        value={formData.alternate_pay1}
        onChange={handleChange}
        placeholder="Alternate Pay 1"
      />
        
      <br />
      <input
        type="text"
        name="alternate_pay2"
        value={formData.alternate_pay2}
        onChange={handleChange}
        placeholder="Alternate Pay 2"
      />
         <br />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />   <br />
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street"
      />   <br />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
      />   <br />
      <input
        type="text"
        name="ifsc_code"
        value={formData.ifsc_code}
        onChange={handleChange}
        placeholder="IFSC Code"
      />   <br />
      <input
        type="text"
        name="ban_account_number"
        value={formData.ban_account_number}
        onChange={handleChange}
        placeholder="BAN Account Number"
      />   <br />
      <input
        type="text"
        name="reference"
        value={formData.reference}
        onChange={handleChange}
        placeholder="Reference"
      />   <br />
      <input
        type="text"
        name="select_card"
        value={formData.select_card}
        onChange={handleChange}
        placeholder="Select Card"
      />   <br />
      <input
        type="text"
        name="Gl_desc"
        value={formData.Gl_desc}
        onChange={handleChange}
        placeholder="GL Description"
      />   <br />
      <input
        type="text"
        name="Gl_code"
        value={formData.Gl_code}
        onChange={handleChange}
        placeholder="GL Code"
      />   <br />
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Text"
      />
      <button type="submit">Submit Details</button>
    </form>
    </div>
 
   
  );
};

export default MyForm;
