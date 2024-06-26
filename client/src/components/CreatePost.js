import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePostForm = () => {
  // State variables to store form data
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      topic,
      description,
      postCategory
    };

    console.log('Post data:', postData);

    try {
      const response = await axios.post('http://localhost:8000/post/save', postData);
      console.log('Server response:', response.data);

      setSuccess('Post submitted successfully!');
      setError('');
      // Clear form fields after successful submission
      setTopic('');
      setDescription('');
      setPostCategory('');
    } catch (err) {
      console.error('Error submitting post:', err);
      setError('Error submitting post');
      setSuccess('');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Create Post</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input
            type="text"
            className="form-control"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="postCategory" className="form-label">Post Category</label>
          <input
            type="text"
            className="form-control"
            id="postCategory"
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
