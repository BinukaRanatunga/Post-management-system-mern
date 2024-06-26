import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then(res => {
        if (res.data.post) {
          setPost(res.data.post);
        }
      })
      .catch(err => {
        console.error('Error fetching post:', err);
      });
  }, [id]);

  useEffect(() => {
    if (post) {
      console.log(post);
    }
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Post Details</h1>
      <h2>{post.topic}</h2>
      <p>{post.description}</p>
      <p>{post.postCategory}</p>
    </div>
  );
}

export default PostDetails;
