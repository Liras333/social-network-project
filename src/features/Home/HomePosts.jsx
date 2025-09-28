import SkeletonLoader from "../../ui/SkeletonLoader";
import Post from "../../ui/Post"
import AddPost from "./AddPost"
import { useAppContext } from "../../hooks/AppContext";


function HomePosts() {
    const { likes, user, comments, posts, isLoadingPosts } = useAppContext();


    if (isLoadingPosts) {
        return (
            <SkeletonLoader />
        )
    }

    return (
        <>
            <AddPost />
            {posts.map(post => (
                <Post key={post.postId} post={post} likes={likes} user={user} comments={comments} />
            ))}
        </>
    )
}

export default HomePosts
