// Updated Pagination.styles.jsx

import styled from 'styled-components'

export const CustomPaginationWrapper = styled.nav`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CustomPaginationList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 0.5rem; /* Add space between items */
`

export const CustomPaginationItem = styled.li``

export const CustomPaginationButton = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ddd;
    color: #999;
    border-color: #ddd;
  }

  &.active {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }
`
