
import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Separator } from './ui/separator';

export interface PostProps {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  timePosted: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const Post: React.FC<PostProps> = ({
  id,
  user,
  timePosted,
  content,
  image,
  likes,
  comments,
  shares,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="mb-4 rounded-xl shadow-sm">
      <CardHeader className="p-4 pb-2 pt-3 flex flex-row items-start space-y-0">
        <div className="flex items-center space-x-3 flex-1">
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{user.name}</h4>
            <p className="text-sm text-gray-500">{timePosted}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="mb-4">{content}</p>
        {image && (
          <div className="rounded-lg overflow-hidden">
            <img src={image} alt="Post content" className="w-full object-cover" />
          </div>
        )}
      </CardContent>

      {(likeCount > 0 || comments > 0 || shares > 0) && (
        <div className="px-4 py-2">
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span className="inline-flex items-center">
                <span className="h-5 w-5 rounded-full bg-facebook-blue flex items-center justify-center mr-1">
                  <ThumbsUp className="h-3 w-3 text-white" />
                </span>
                {likeCount}
              </span>
            </div>
            <div>
              <span className="mr-2">{comments} comments</span>
              <span>{shares} shares</span>
            </div>
          </div>
        </div>
      )}

      <Separator />

      <CardFooter className="p-1">
        <div className="grid grid-cols-3 w-full text-gray-500 font-medium">
          <Button 
            variant="ghost" 
            className={`flex items-center justify-center rounded-none py-2 ${liked ? 'text-facebook-blue' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUp className="mr-2 h-5 w-5" />
            Like
          </Button>
          <Button variant="ghost" className="flex items-center justify-center rounded-none py-2">
            <MessageSquare className="mr-2 h-5 w-5" />
            Comment
          </Button>
          <Button variant="ghost" className="flex items-center justify-center rounded-none py-2">
            <Share className="mr-2 h-5 w-5" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
