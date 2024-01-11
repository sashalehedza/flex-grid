import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Styled Components
export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`

export const FormControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
  cursor: pointer;
`

export const PostList = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export const PostContainer = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #555;
  }
`

export const NoPostsMessage = styled.p`
  margin-top: 1rem;
  color: #555;
`

export const PaginationWrapper = styled.nav`
  margin-top: 1rem;
`

export const PaginationList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const PaginationItem = styled.li`
  margin-right: 0.5rem;
`

export const PaginationButton = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &.active {
    background-color: #0056b3;
  }
`
