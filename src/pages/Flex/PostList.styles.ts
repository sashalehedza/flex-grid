// Posts.styles.ts
import styled from 'styled-components'

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // justify-content: space-around;
`

export const PostContainer = styled.li`
  list-style: none;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 15px;
  flex: 0 0 calc(33.33% - 20px); /* Three posts in a row on large screens */
  box-sizing: border-box;
  text-align: left;

  @media (max-width: 1200px) {
    flex: 0 0 calc(50% - 20px); /* Two posts in a row on middle-sized screens */
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 20px); /* One post in a row on small screens */
  }
`

export const NoPostsMessage = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 18px;
  color: #888;
`
