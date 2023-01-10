import { Routes, Route } from "react-router-dom";
import VideoList from "./components/Videos/VideoList";
import NavBar from "./components/NavBar/NavBar";
import VideoForm from "./components/Videos/VideoForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <NavBar />
      <div className="container p-4">
        <Routes>
          {/* <Route path='/' element={<NavBar/>}/> */}
          <Route path="/" element={<VideoList />} />
          <Route path="/newvideo" element={<VideoForm />} />
        </Routes>
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
