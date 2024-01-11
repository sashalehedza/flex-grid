// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Flex from './pages/Flex/Posts'
import Grid from './pages/Grid/Posts'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/flex' element={<Flex />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/' element={<p>Welcome to the home page!</p>} />
        </Routes>
      </>
    </Router>
  )
}

export default App
