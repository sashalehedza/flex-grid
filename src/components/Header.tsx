// Header.js
import {
  HeaderWrapper,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to='/'>Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to='/flex'>Flex</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to='/grid'>Grid</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
