import {Routes,Route} from 'react-router-dom'
import VideoList from './components/VideoList'
import NavBar from './components/NavBar'
import VideoForm from './components/VideoForm'
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<NavBar/>}/> */}
        <Route path='/videolist' element={<VideoList/>}/>
        <Route path='/videoform' element={<VideoForm/>}/>
      </Routes>
    </>
  )
}

export default App
