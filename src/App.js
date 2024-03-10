import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import SkillPage from './pages/skillPage';
import ProjectPage from './pages/projectPage';
import HomePage from './pages/homePage';
import ResumePage from './pages/rusumePage';
import Navbar from './component/navbar';
function App() {
  return (


    <div className="container">
      <BrowserRouter basename="/Myportfolio">
        <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage/> }/>
        <Route path='skillpage' element={<SkillPage/>} />
        <Route path='projectpage' element={<ProjectPage/>} />
        <Route path='resumepage' element={<ResumePage/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
} 

export default App;
