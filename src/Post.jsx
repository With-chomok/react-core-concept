import { use } from "react";
import SinglePost from "./Post"

export default function Posts ({postsPromise}) {
    const posts = use(postsPromise)
    console.log(posts);
    
    return(
        <div className="card">
            <h2>All posts are here {posts.length}</h2>
            {
                posts.map(onePostDetails => <SinglePost sinpost = {onePostDetails} ></SinglePost>)
            }
        </div>
    )
}