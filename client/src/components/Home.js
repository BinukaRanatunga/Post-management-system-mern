import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate  } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts"); // Adjust the API endpoint if necessary
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.postCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleEdit = (id) => {
    // Handle the edit action here
    navigate(`/edit/${id}`);
    console.log("Edit post with id:", id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/post/delete/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
      setError(err.message || err);
    }
  };



  return (
    <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="mb-0">Posts</h1>
      <div className="input-group w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="input-group-append">
          <span className="input-group-text" style={{ color: 'red' }}>
            Search
          </span>
        </div>
      </div>
    </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Post Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr key={post._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`/post/${post._id}`}>{post.topic}
                </a>
              </td>
              <td>{post.description}</td>
              <td>{post.postCategory}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(post._id)}
                >
                edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success btn-sm me-2">
      <Link className="nav-link" to="/add">Add Post</Link>
      </button>
    </div>
  );
};

export default PostsComponent;
