import Image from "next/image";
import styles from "./page.module.css";
import { CommentProps, ReplyProps, OwnerProps } from "@/libs/types";
import Comment from "@/components/Comment"
import  {comments} from "@/libs/comments";
import PostOwnner from "@/components/PostOwnner";
export default function Home() {

  const Post:OwnerProps ={
    userImagePath:"/profileImages/me.jpg",
    username: "Paisit Lerdananpipat 660612155",
    postText: "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207",
    likeNum: 1000000,
  }

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner {...Post}/>

        {/* Comment Example */}
      
        {/* Reply Example */}
        
        {/* map-loop render Comment component here */}
        {comments.map((c:CommentProps) => <Comment {...c} key={c.commentText}/>)}
      </div>
    </div>
  );
}
