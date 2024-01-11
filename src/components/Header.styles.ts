// Header.styles.js

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background-color: #333;
  padding: 10px 0;
`

export const Navigation = styled.nav`
  text-align: center;
`

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavigationItem = styled.li`
  display: inline-block;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
  }
`
