import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData); // Ensure this matches your backend port
      console.log('User registered:', response.data);
      // Show success notification
      toast.success('User registered successfully!');
      navigate('/');
    } catch (error) {
      console.error('There was an error registering the user:', error);
      // Show error notification
      toast.error('There was an error registering the user.');
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '200px'}}></div>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='firstName' type='text' value={formData.firstName} onChange={handleChange} />
              </MDBCol>
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Last name' id='lastName' type='text' value={formData.lastName} onChange={handleChange} />
              </MDBCol>
            </MDBRow>
            <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={formData.password} onChange={handleChange} />
            <MDBBtn className='w-100 mb-4' size='md' type='submit'>Sign up</MDBBtn>
          </form>
          <ToastContainer />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
