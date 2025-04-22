
import React, { useState } from 'react';
import { Video, Image, Smile } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Card } from './ui/card';

interface PostCreatorProps {
  onPost: (content: string) => void;
}

const PostCreator: React.FC<PostCreatorProps> = ({ onPost }) => {
  const [content, setContent] = useState<string>('');

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent('');
    }
  };

  return (
    <Card className="p-4 rounded-xl mb-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div 
          onClick={() => document.getElementById('post-input')?.focus()}
          className="bg-facebook-grey rounded-full py-2 px-4 flex-grow cursor-text"
        >
          <p className="text-gray-500">What's on your mind, John?</p>
        </div>
      </div>

      <div className="mb-3">
        <textarea 
          id="post-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 focus:outline-none resize-none"
          placeholder="Write something..."
          rows={content ? 3 : 1}
        />
      </div>

      <Separator className="my-3" />
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1 text-gray-500 cursor-pointer hover:bg-facebook-grey p-2 rounded-lg">
            <Video className="h-6 w-6 text-red-500" />
            <span className="hidden sm:inline font-medium">Live Video</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 cursor-pointer hover:bg-facebook-grey p-2 rounded-lg">
            <Image className="h-6 w-6 text-green-500" />
            <span className="hidden sm:inline font-medium">Photo/Video</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 cursor-pointer hover:bg-facebook-grey p-2 rounded-lg">
            <Smile className="h-6 w-6 text-yellow-500" />
            <span className="hidden sm:inline font-medium">Feeling/Activity</span>
          </div>
        </div>

        <Button 
          onClick={handlePost}
          className="bg-facebook-blue hover:bg-facebook-dark text-white rounded-lg px-4"
          disabled={!content.trim()}
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

export default PostCreator;
