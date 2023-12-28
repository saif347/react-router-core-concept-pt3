import { Link, useLoaderData } from "react-router-dom";


const UserPost = () => {
    const posts = useLoaderData()
    console.log(posts);
    const {id, body, title}= posts
    return (
        <div className="box">
            <h4>User id: {id}</h4>
            <h2>title: {title}</h2>
            <p>comment: {body}</p>
            <Link to={-1}>go back</Link>
            
        </div>
    );
};

export default UserPost;