
import React, { useState } from 'react';
import PostCreator from './PostCreator';
import Post, { PostProps } from './Post';

const Feed = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    {
      id: 1,
      user: {
        name: 'Ehtisham Anwar',
        avatar: 'https://i.pravatar.cc/100?img=1',
      },
      timePosted: '3 hours ago',
      content: 'Just finished my new website project! So excited to share it with everyone. #webdevelopment #react',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      likes: 24,
      comments: 6,
      shares: 2,
    },
    {
      id: 2,
      user: {
        name: 'Muhammad Munsif',
        avatar: 'https://i.pravatar.cc/100?img=2',
      },
      timePosted: '5 hours ago',
      content: 'Had an amazing time at the tech conference today. Met so many brilliant minds!',
      likes: 15,
      comments: 3,
      shares: 1,
    },
    {
      id: 3,
      user: {
        name: 'Areeb Abassi',
        avatar: 'https://i.pravatar.cc/100?img=3',
      },
      timePosted: '1 day ago',
      content: 'Check out my latest photography shoot. Nature is so beautiful this time of year.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      likes: 42,
      comments: 8,
      shares: 5,
    },
  ]);

  const handleCreatePost = (content: string) => {
    const newPost: PostProps = {
      id: Date.now(),
      user: {
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png',
      },
      timePosted: 'Just now',
      content,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-xl w-full mx-auto py-4">
      <PostCreator onPost={handleCreatePost} />
      
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
