import { Routes, Route } from "react-router-dom";
import VideoList from "./components/Videos/VideoList";
import NavBar from "./components/NavBar/NavBar";
import VideoForm from "./components/Videos/VideoForm";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          {/* <Route path='/' element={<NavBar/>}/> */}
          <Route path="/videolist" element={<VideoList />} />
          <Route path="/newvideo" element={<VideoForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
