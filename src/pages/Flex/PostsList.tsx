// PostsList.tsx
import React from 'react'
import { PostList, PostContainer, NoPostsMessage } from './PostList.styles'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostsListProps {
  currentPosts: Post[]
}

const PostsList: React.FC<PostsListProps> = ({ currentPosts }) => {
  if (currentPosts.length === 0) {
    return <NoPostsMessage>No matching posts.</NoPostsMessage>
  }

  return (
    <PostList>
      {currentPosts.map((post) => (
        <PostContainer key={post.id}>
          <h3>{post.title}</h3>
          <p>
            <strong>User ID:</strong> {post.userId}
          </p>
          <p>
            <strong>Post ID:</strong> {post.id}
          </p>
          <p>{post.body}</p>
        </PostContainer>
      ))}
    </PostList>
  )
}

export default PostsList
