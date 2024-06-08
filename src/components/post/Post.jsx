import "./post.css"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({post}){
    const [like,setLike] = useState(post.likes)
    const [isLiked,setisLiked] = useState(false)

    const likeHandler =() =>{
        setLike(isLiked ? like -1 : like + 1)
        setisLiked(!isLiked)
    }
    return (
       <div className="post">
        <div className="postWrapper">
            <div className="postTop">

                <div className="postTopLeft">
                    <img className="postProfileImage" 
                    src={Users.filter((u) => u.id === post.userID)[0].profilePicture} alt="" />
                    <span className="postUserName">
                        {Users.filter((u) => u.id === post.userID)[0].username}
                        </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <span class="material-symbols-outlined postI">more_vert</span>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className="postImage" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/heart.jpg" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/like.jpg" onClick={likeHandler} alt="" />
                    <spam className="postLikeCounter">{like}</spam>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">Comments: {post.comments}</span>
                </div>
            </div>
        </div>
       </div>
    )
}