
import { Link, useLoaderData, } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>post: {posts.length}</h3>

          <div className='container'>
            {
                posts.map(post => <div className='box' key={post.id}>
                    <p>id: {post.id}</p>
                    <p>comment: {post.body}</p>
                    <Link to={`/post/${post.id}`}>see detail</Link>
                </div>)
            }
          </div>
        </div>
    );
};

export default Posts;