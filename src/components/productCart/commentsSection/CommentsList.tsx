import CommentComp from "./CommentComp";
import { StaticImageData } from "next/image";
// changable
interface Comment {
    name: string | null | undefined,
    image: StaticImageData,
    commentText: string;
    inputImg: string;
    date: string;
    marginB: string;
    reply: Comment[];
}
// changable
interface CommentsListProps {
  comments: Comment[];
  depth?: number;
  onAddReply: (text: string, parentComment: Comment) => void;
}
// changable
export default function CommentsList({ comments, onAddReply }:CommentsListProps) {
    return(
        <>
            <div>
                {comments.map((comment, index) => (
                    <CommentComp key={index} depth={1} comment={comment} onAddReply={(text, parentComment) => onAddReply(text, parentComment)} />
                ))}
            </div>
        </>
    )
};
