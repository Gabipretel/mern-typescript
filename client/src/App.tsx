import {Routes,Route} from 'react-router-dom'
import VideoList from './components/Videos/VideoList'
import NavBar from './components/NavBar/NavBar'
import VideoForm from './components/Videos/VideoForm'
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
