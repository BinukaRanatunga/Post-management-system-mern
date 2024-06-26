import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleEdit = (id) => {
    // Handle the edit action here
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
      <h1 className="mb-4">Posts</h1>
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
          {posts.map((post, index) => (
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
                  Edit
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
        <a href="/add"></a>
        Add Post
      </button>
    </div>
  );
};

export default PostsComponent;
