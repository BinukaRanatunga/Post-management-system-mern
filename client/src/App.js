import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/posts'); // Adjust the API endpoint if necessary
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

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.description}</h2>
                        <p>{post.postCategory}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
