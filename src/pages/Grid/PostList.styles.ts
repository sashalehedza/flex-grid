import styled from 'styled-components'

export const PostList = styled.div`
  display: grid;
  grid-gap: 20px; /* Adjust the gap between items */
  grid-template-columns: repeat(3, 1fr); /* Default to 3 items in a row */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 items in a row on middle-sized screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* 1 item in a row on small screens */
  }
`

export const PostContainer = styled.li`
  list-style: none;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 15px;
  box-sizing: border-box;
  text-align: left;
`

export const NoPostsMessage = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 18px;
  color: #888;
`
